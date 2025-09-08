import modalStyle from "../css/modal.module.css";
import cancelImg from "../assets/X.svg";

type Props = {
  setIsOpen: (isOpen: boolean) => void;
  text: string;
  title: string;
  onConfirm?: () => void;
};

export default function Modal({ setIsOpen, text, title, onConfirm }: Props) {
  return (
    <div className={modalStyle.overlay}>
      <div className={modalStyle.modalContainer}>
        <div className={modalStyle.modalHeader}>
          <span className={modalStyle.headerText}>{title}</span>
          <button
            className={modalStyle.closeBtn}
            onClick={() => setIsOpen(false)}
          >
            <img src={cancelImg} alt="close" onClick={() => setIsOpen(false)} />
          </button>
        </div>
        <div className={modalStyle.modalContent}>
          <span className={modalStyle.contentText}>{text}</span>
        </div>
        <div className={modalStyle.modalBtnDiv}>
          <button
            className={modalStyle.modalBtn}
            onClick={() => {
              if (onConfirm) onConfirm();
              setIsOpen(false);
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
