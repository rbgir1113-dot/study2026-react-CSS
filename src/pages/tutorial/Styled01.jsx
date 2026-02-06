import React from 'react';
import styled from 'styled-components';
import S from './style';
import MyComponent from './MyComponent';

const Styled01 = () => {

  // div생성
  // width, height 100px의 정사각형 박스 생성
  // background-color는 마음대로~

  return (
    <div>
      <S.StyledP>스타일 넣기</S.StyledP>
      <S.StyledDiv />
      <MyComponent />
    </div>
  );
};

export default Styled01;