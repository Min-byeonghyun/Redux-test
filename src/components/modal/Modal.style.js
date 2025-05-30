import styled from "styled-components";


export const ModalWrapper = styled.div`
  position : fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width : 100vw;
  height : 100vh;
  background-color : rgba(0,0,0,0.5);
  display : flex;
  align-items : center;
  justify-content : center;
  .container {
    width : 100%;
    height : 100%;
    max-width : 500px;
    max-height : 500px;
    background-color : white;
    border-radius : 10px;
    padding :"20px";
    display : flex;
    flex-direction : column;
    padding : 20px;
    .header {
      display : flex;
      justify-content : space-between;
      align-items : center;
    }
  }
`