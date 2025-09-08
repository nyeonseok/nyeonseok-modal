// src/App.tsx
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalOnConfirm, setModalOnConfirm] = useState<(() => void) | null>(
    null
  );
  const modalOpen = () => {
    setModalTitle("모달 Title");
    setModalText("모달 Text");
    setModalOnConfirm(() => () => {
      //넣고 싶은 함수 로직 넣으면 됨, 넣기 싫으면 setModalOnConfirm을 안 적어도 괜찮다.(그럼 그냥 확인 누를 시 모달창 닫힘)
    });
    setIsOpen(true);
  };

  return (
    <div>
      <button onClick={() => modalOpen()}>Open Modal</button>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          text={modalText}
          title={modalTitle}
          onConfirm={modalOnConfirm || undefined}
        />
      )}
    </div>
  );
}

export default App;
