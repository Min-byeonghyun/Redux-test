import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL } from "../../reducer/modal";
import { ModalWrapper } from "./Modal.style";
import { ModalStore } from "../../zustand";
export default function Modal() {
  // const isShow = useSelector((state) => state.modal.isShow); //스테이트 가져오는거
  // const dispatch = useDispatch(); //주문 하기위한 함수

  // const CloseModal = () => {
  //   dispatch({ type: CLOSE_MODAL }); // 액션타입: 미리 등록해둔 주문 명령
  // };

  // if (!isShow) return null;
  const {isShow, CloseModal} = ModalStore();
  if(!isShow) return null;
  
  return (
    <ModalWrapper>
      <div className="container">
        <div className="header">
          <h1>제목</h1>
          {/* <button onClick={CloseModal}>닫기</button> */}
          <button onClick={CloseModal}>닫기</button>
        </div>
        <p>내용</p>
      </div>
    </ModalWrapper>
  );
}
