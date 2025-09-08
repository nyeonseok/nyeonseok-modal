import "../css/modal.css";
import CloseIcon from "../assets/X.svg";

type Props = {
  setIsOpen: (isOpen: boolean) => void;
  text: string;
  title: string;
  onConfirm?: () => void;
};

export default function Modal({ setIsOpen, text, title, onConfirm }: Props) {
  return (
    <div className="overlay">
      <div className="modalContainer">
        <div className="modalHeader">
          <span className="headerText">{title}</span>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <img src={CloseIcon} alt="close" onClick={() => setIsOpen(false)} />
          </button>
        </div>
        <div className="modalContent">
          <span className="contentText">{text}</span>
        </div>
        <div className="modalBtnDiv">
          <button
            className="modalBtn"
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
