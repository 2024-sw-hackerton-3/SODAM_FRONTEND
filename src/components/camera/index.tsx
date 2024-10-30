import { useEffect, useRef, useState } from "react";
import * as S from "./style";
import ImageIcon from "../../assets/image/ic_image.png";
import FoodApi from "../../api/food/FoodApi";
import LoadingScreen from "../loading";
import { useRecoilState, useSetRecoilState } from "recoil";
import { FoodRecipeState } from "../../state/state";
import { useNavigate } from "react-router-dom";

const CameraPage = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const navigate = useNavigate();
    const setFoodRecipeState = useSetRecoilState(FoodRecipeState);
    const foodRecipeState = useRecoilState(FoodRecipeState);

    useEffect(() => {
      console.log("전역 상태 변경");
      
      console.log(foodRecipeState);
      
    }, [foodRecipeState]);

    const fileHandler = () => {
      if (fileInputRef.current) {
        fileInputRef.current!.click();
      }
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        console.log("선택된 파일:", file);
        setIsLoading(true);
        const response = await FoodApi.getFoodQueryFile(file)

        setFoodRecipeState(response);
        navigate("/cameraResult");
      }
    }

    const handleCapture = async () => {
      if (!videoRef.current || !canvasRef.current) {
        return;
      }

      setIsLoading(true);
   
      const $canvas = canvasRef.current;
      const $video = videoRef.current;
   
      const context = $canvas.getContext('2d');
      if (!context) {
        return;
      }
   
      $canvas.width = $video.videoWidth;
      $canvas.height = $video.videoHeight;
   
      context.drawImage($video, 0, 0, $canvas.width, $canvas.height);
      $canvas.toBlob(async (blob) => {
        if (blob === null) { return }
        try {
          const response = await FoodApi.getFoodQueryImage(blob)
          
        } catch (e) {
          console.error(e)
        }
      });

      const imageToDataUrl = $canvas.toDataURL('image/png');
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
        {isLoading && <LoadingScreen/>} 
        <video ref={videoRef} autoPlay playsInline style={{ width: '100vw', height: '100%' }}  />
        <S.CameraButtonContainer>
          <S.ImageSelectIconButton src={ImageIcon} alt='camera' onClick={fileHandler}/>
          <input
              style={{ display: 'none' }}
              name="file"
              ref={fileInputRef} 
              type="file"
              accept="image/*" 
              className="a11y-hidden"
              onChange={handleFileChange}
            />;
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