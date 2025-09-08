import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../css/modal.css";
import CloseIcon from "../assets/X.svg";
export default function Modal({ setIsOpen, text, title, onConfirm }) {
    return (_jsx("div", { className: "overlay", children: _jsxs("div", { className: "modalContainer", children: [_jsxs("div", { className: "modalHeader", children: [_jsx("span", { className: "headerText", children: title }), _jsx("button", { className: "closeBtn", onClick: () => setIsOpen(false), children: _jsx("img", { src: CloseIcon, alt: "close", onClick: () => setIsOpen(false) }) })] }), _jsx("div", { className: "modalContent", children: _jsx("span", { className: "contentText", children: text }) }), _jsx("div", { className: "modalBtnDiv", children: _jsx("button", { className: "modalBtn", onClick: () => {
                            if (onConfirm)
                                onConfirm();
                            setIsOpen(false);
                        }, children: "\uD655\uC778" }) })] }) }));
}
