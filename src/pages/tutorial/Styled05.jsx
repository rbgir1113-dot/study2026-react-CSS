import React from 'react';
import BasicButton from '../../components/button/BasicButton';

const Styled05 = () => {

  // (심화) 컴포넌트 제작
  return (
    <div>
      <BasicButton size={"small"} font={"h3"} variant={"main"}>로그인</BasicButton>
      <BasicButton size={"full"} font={"h5"} variant={"sub"} shape={"large"}>로그아웃</BasicButton>
    </div>
  );
};

export default Styled05;