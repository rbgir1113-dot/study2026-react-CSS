// import React, { useState } from 'react';
// import S from './style';

// const Styled03 = () => {

//   // box 3개를 생성하고
//   // 사용자가 "가로"로 값을 넘기면 가로로 배치
//   // 사용자가 "세로"로 값을 넘기면 세로로 배치
//   const [result, setResult] = useState("")

//   const handleKeyPress = (e) => {
//     const value = e.target.value
//     if(e.key === "Enter") {
//       setResult(value)
//       e.target.value = ""
//     }
//   }

//   if(result === "가로") {
//     setResult("row")
//   } else if(result === "세로") {
//     setResult("column")
//   }
//   return (
//     <div>
//       <input type="text" placeholder='가로 or 세로' onKeyPress={handleKeyPress}/>
//       <div>
//         <S.BoxDiv position={result} />
//         <S.BoxDiv position={result} />
//         <S.BoxDiv position={result} />
//       </div>
//     </div>
//   );
// };

// export default Styled03;


import React from 'react';
import S from './style';

const Styled03 = () => {

  // box 3개를 생성하고
  // 사용자가 "가로"로 값을 넘기면 가로로 배치
  // 사용자가 "세로"로 값을 넘기면 세로로 배치

  return (
    <S.BoxWrapper direction={"세로"}>
      <S.Box />
      <S.Box />
      <S.Box />
    </S.BoxWrapper>
  );
};

export default Styled03;