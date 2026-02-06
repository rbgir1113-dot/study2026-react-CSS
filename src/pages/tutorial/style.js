// import styled from "styled-components";


// const S = {}

// S.StyledP = styled.p`
//   color: blue;
//   font-size: 20px;
//   font-weight: 800;
// `;

// S.StyledDiv = styled.div`
//   height: 100px;
//   width : 100px;
//   background-color: red;
// `

// S.Strong = styled.strong`
//   /* 콜백함수 */
//   color : ${(props) => props.color};
// `

// // $ {} 탬플릿 리터럴

// S.Div = styled.div`
//   width: 200px;
//   height: 200px;
//   border: solid ${(props) => props.box} black;
// `

// S.BoxDiv = styled.div`
//   width: 200px;
//   height: 200px;
//   border: solid 1px black;
//   display: flex;
//   flex-direction: ${(props) => props.position};
// `


// export default S;

 
import styled, { css } from "styled-components";
import { border, flexCenter } from "../../style/common";

const S = {}

// css 변수
const widthAndHeight = css`
  width: 200px;
  height: 200px;
`

S.StyledP = styled.p`
  color: blue;
  font-size: 20px;
  font-weight: 800;
`;

S.StyledDiv = styled.div`
  border: solid 1px black;
  background-color: green;
`

S.Strong = styled.strong`
  /* 콜백함수 */
  color: ${(props) => props.color};
`

S.Div = styled.div`
  ${widthAndHeight};
  border: solid ${(props) => props.box} black;
`

S.BoxWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: ${({dicection}) => dicection === "가로" ? "row" : "column"};
`
S.Box = styled.div`
  ${widthAndHeight};
  background-color: orange;
`

S.BoxContainer = styled.div`
  width: 500px;
  height: 500px;
  ${border};
  ${flexCenter};
`

export default S;
