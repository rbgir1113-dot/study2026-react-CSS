import React from 'react';
import S from './style';

const Styled04 = () => {
  return (
    <div>
      {/* 
        부모 500x500(px)
        자식 200x200(px)
        자식을 부모 정중앙 배치
      */}
      <S.BoxContainer>
        <S.Box />
      </S.BoxContainer>
    </div>
  );
};

export default Styled04;