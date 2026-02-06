import React from 'react';
import S from './style';

const Styled02 = () => {
  // 동적 스타일 적용
  return (
    <div>
      <S.Strong color={'blue'}>파란색</S.Strong>
      <S.Strong color={'orange'}>주황색</S.Strong>
      <S.Strong color={'green'}>초록색</S.Strong>
      <S.Strong color={'pink'}>핑크색</S.Strong>

      <S.Div box={"1px"}/>
      <S.Div box={"5px"}/>
      <S.Div box={"10px"}/>
      <S.Div box={"30px"}/>
    </div>
  );
};

export default Styled02;