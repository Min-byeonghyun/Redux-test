import React from "react";
import { create } from "zustand";

export const CountStore = create((set) => ({
  count: 2,
  Plus() {
    set((state) => ({ count: state.count + 1 }));
  },
  Minus() {
    set((state) => ({ count: state.count - 1 }));
  },
}));
