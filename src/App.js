import Modal from "./components/modal/Modal";
import OpenModalButton from "./components/OpenModalButton";

import { CountStore } from "./zustand";
import Count from "./components/Count";
function App() {
  const { count, Plus, Minus } = CountStore();

  return (
    <div className="App">
      <OpenModalButton />
      <Modal />
      <p>{count}</p>
      <Count />
      <button onClick={Plus}> 증가 </button>
      <button onClick={Minus}> 감소 </button>
    </div>
  );
}

export default App;
