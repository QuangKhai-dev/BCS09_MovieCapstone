import React from 'react';
import * as loginAnimation from './../../assets/animation/loginAnimation.json';
import Lottie from 'react-lottie';
const Login = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="container">
      <div className="gird grid-cols-2">
        <div className="col_left">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <div className="col_right"></div>
      </div>
    </div>
  );
};

export default Login;
