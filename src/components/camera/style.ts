import styled from "styled-components";


export const CameraContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  background-color: black;
`

export const CameraButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Spacer = styled.div`
  margin-left: auto;
`

export const ImageSelectIconButton = styled.img`
  width: 32px;
  height: 32px;
  color: white;
  position: absolute; 
  align-self: center;
  left: 38px;
  margin-bottom: 14px;
`
export const CameraButton = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 100px;
  background-color: white;
  color: black;
  align-self: center;
  cursor: pointer;
  padding: 24px;
  margin-bottom: 24px;
  
`