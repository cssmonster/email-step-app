import React, { useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import CloseIcon from "@/components/icons/CloseIcon";

interface ModalProps {
  children?: React.ReactNode;
  onClose?: () => void;
  isOpen?: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, onClose, isOpen }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <>
      {isOpen && (
        <div className="fixed w-screen h-screen bg-bg1 z-20 left-0 top-0 flex flex-col justify-center items-center">
          <div className="absolute right-[32px] top-[16px]">
            <CloseIcon />
          </div>
          <OutsideClickHandler onOutsideClick={() => onClose && onClose()}>
            <div className="w-full">{children}</div>
          </OutsideClickHandler>
        </div>
      )}
    </>
  );
};

export default Modal;
