import { Fragment } from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0  w-full h-screen bg-[rgba(0,0,0,0.5)] z-20"
      onClick={props.onClose}
    ></div>
  );
};
const ModalOverlay = (props) => {
  return (
    <div className="fixed top-[20vh] left-[50%] w-[95%] sm:w-4/5 md:w-9/12 lg:w-3/5 -translate-x-1/2 rounded-2xl bg-white box-shadow z-30">
      <div className="content">{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClose}>{props.children}</BackDrop>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
