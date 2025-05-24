import React from "react";
import { CountStore } from "../zustand";

export default function Count() {
  const { count } = CountStore();
  return <div>{count}</div>;
}
