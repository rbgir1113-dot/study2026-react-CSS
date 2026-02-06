import styled from "styled-components";
import theme from "../../style/theme";

const S ={}

// 스타일드 컴포넌트
// S.앞글자 대문자로 시작한다.

S.H1 = styled.h1`
  color: green;
  font-size: 20px;
  font-weight: 900;
`
S.SubTitle = styled.span`
  color : ${({theme}) => theme.PALLETE.primary.main};
  
  /* 테마의 h1 폰트사이즈를 적용시키기 */
  font-size: ${({theme}) => theme.FONT_SIZE.h1};
`

export default S;