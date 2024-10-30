import { createGlobalStyle } from "styled-components";
import { theme } from "../styles";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard-Medium";
    src: url("/Pretendard-Medium.otf") format("opentype");
  }

  @font-face {
    font-family: "Mungyeong";
    src: url("/font/Mungyeong-Gamhong-Apple.otf") format("opentype ");
  }

 :root {
    @media screen and (min-width: 1026px) and (max-width: 1440px) {
      font-size: 90%;
    }

    @media screen and (min-width: 769px) and (max-width: 1025px) {
      font-size: 80%;
    }

    @media screen and (min-width: 541px) and (max-width: 768px) {
      font-size: 70%;
    }

    @media screen and (min-width: 301px) and (max-width: 540px) {
      font-size: 60%;
    }

    @media screen and (max-width: 300px) {
      font-size: 50%;
    }
  }

  body {
    background-color: ${theme.white};
  }

  ul,
  li {
    list-style: none;
  }

  p {
    display: inline-block;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
  }

  label {
    cursor: pointer;
  }

  input,
  textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
    border: none;
    outline: none;
    resize: none;
  }

  input:focus {
    outline: none;
  }

  button {
    outline: none;
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  .swiper-wrapper {
    width: 100%;
    height: 100vh;
  }

  .swiper-slide {
    height: 100% !important;
  }

  .swiper {
    margin: 0;
    height: 100%;
  }
`;

export default GlobalStyle;
