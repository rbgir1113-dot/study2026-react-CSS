import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/Main";
import Layout from "../pages/layout/Layout";
import Styled01 from "../pages/tutorial/Styled01";
import Styled02 from "../pages/tutorial/Styled02";
import Styled03 from "../pages/tutorial/Styled03";
import Styled04 from "../pages/tutorial/Styled04";
import Styled05 from "../pages/tutorial/Styled05";
import Styled06 from "../pages/tutorial/Styled06";

const router = createBrowserRouter([
  {
    path : "/", // 여기는 index 사용이 불가 먼저 지정 해야함
    element: <Layout />,
    children : [
      {
        path : "", // === index : true  
        element: <Main />
      },
      {
        path : "styled-01",
        element: <Styled01 />
      },
      {
        path : "styled-02",
        element : <Styled02 />
      },
      {
        path : "Styled-03",
        element : <Styled03 />
      },
      {
        path : "Styled-04",
        element: <Styled04 />
      },
      {
        path : "Styled-05",
        element: <Styled05 />
      },
      {
        path : "Styled-06",
        element: <Styled06 />
      }
    ]
  }
]);


export default router