import React from "react";
// import { useDispatch } from "react-redux";
// import { OPEN_MODAL } from "../reducer/modal";
import { ModalStore } from "../zustand";

export default function OpenModalButton() {
  const {isShow, OpenModal} = ModalStore();
  // const dispatch = useDispatch();

  // const openModal = () => {
  //   dispatch({ type: OPEN_MODAL });
  // };

  // return <button onClick={openModal}>모달 열기</button>;
  return(
    <>
  <button onClick={OpenModal}>모달 열기</button>
  </>
)
  
}
