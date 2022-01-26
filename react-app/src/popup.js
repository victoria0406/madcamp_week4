import ReactDom from "react-dom";

const Popup = ({ children }) => {
  const el = document.getElementById("modal");
  return ReactDom.createPortal(children, el);
};

export default Popup;
