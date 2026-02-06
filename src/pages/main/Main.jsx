import React from 'react';
import S from './style';
import theme from '../../style/theme';

const Main = () => {
  return (
    <div>
      <S.H1>메인 페이지!😊</S.H1>
      <S.SubTitle>서브 타이틀!</S.SubTitle>
      {console.log(theme)}
    </div>
  );
};

export default Main;