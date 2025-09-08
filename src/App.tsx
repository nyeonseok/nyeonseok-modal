// src/App.tsx
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && (
        <Modal
          setIsOpen={setOpen}
          title="테스트 모달"
          text="모달 내용 확인"
          onConfirm={() => alert("확인 클릭됨")}
        />
      )}
    </div>
  );
}

export default App;
