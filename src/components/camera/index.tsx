import { useEffect, useRef, useState } from "react";
import * as S from "./style";
import ImageIcon from "../../assets/ic_image.png";

const CameraPage = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [photo, setPhoto] = useState<string | null>(null);
   
    const handleCapture = () => {
      if (!videoRef.current || !canvasRef.current) {
        return;
      }
   
      const $canvas = canvasRef.current;
      const $video = videoRef.current;
   
      const context = $canvas.getContext('2d');
      if (!context) {
        return;
      }
   
      $canvas.width = $video.videoWidth;
      $canvas.height = $video.videoHeight;
   
      context.drawImage($video, 0, 0, $canvas.width, $canvas.height);
      const imageToDataUrl = $canvas.toDataURL('image/png');
      setPhoto(imageToDataUrl);
    };
   
    useEffect(() => {
      const connectCamera = async () => {
        if (!videoRef.current || !canvasRef.current) {
          return;
        }
        
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' }, // 후면 카메라 설정
          audio: false,
        });
   
        videoRef.current.srcObject = stream;// 을 통해 video 태그에 카메라 스트림을 연결
      };
   
      connectCamera();
    }, []);
   
    return (
      <S.CameraContainer>
        <video ref={videoRef} autoPlay playsInline style={{ width: '100vw', height: '100%' }}  />
        <S.CameraButtonContainer>
          <S.ImageSelectIconButton src={ImageIcon} alt='camera' />
          <S.Spacer />
          <S.CameraButton onClick={handleCapture}/>
          <S.Spacer/> 
        </S.CameraButtonContainer>
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        {/* {photo && (
          <div>
            <h1>캡쳐된 이미지</h1>
            <img src={photo} alt='Captured' />
          </div>
        )} */}
      </S.CameraContainer>
    );
  };

export default CameraPage;