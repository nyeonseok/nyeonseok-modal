import "../css/modal.css";
type Props = {
    setIsOpen: (isOpen: boolean) => void;
    text: string;
    title: string;
    onConfirm?: () => void;
};
export default function Modal({ setIsOpen, text, title, onConfirm }: Props): import("react/jsx-runtime").JSX.Element;
export {};
