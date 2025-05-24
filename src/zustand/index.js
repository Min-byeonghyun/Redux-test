import React from "react";
import { create } from "zustand";

export const CountStore = create((set) => ({
  count: 0,
  Plus() {
    set((state) => ({ count: state.count + 1 }));
  },
  Minus() {
    set((state) => ({ count: state.count - 1 }));
  },
}));

export const ModalStore = create((set) => ({
  isShow : false,
  OpenModal() {
    set((state) => ({isShow : true}))
  },
  CloseModal() {
    set((state) => ({isShow : false}))
  }
}))