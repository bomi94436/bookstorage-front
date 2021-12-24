import React, { useEffect } from 'react';
const { naver } = window as any;

const Login = () => {
  //   const initializeNaverLogin = () => {
  //     const naverLogin = new naver.LoginWithNaverId({
  //       clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
  //       callbackUrl: 'http://localhost:3000/',
  //       isPopup: false, // popup 형식으로 띄울것인지 설정
  //       loginButton: { color: 'white', type: 1, height: '47' }, //버튼의 스타일, 타입, 크기를 지정
  //     });
  //     naverLogin.init();
  //   };

  //   useEffect(() => {
  //     initializeNaverLogin();
  //   }, []);

  return <div id="naverIdLogin" />;
};

export default Login;
