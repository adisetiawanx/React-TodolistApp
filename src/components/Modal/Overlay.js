import { createPortal } from "react-dom";

const Overlay = (props) => {
  const location = document.getElementById("overlay");
  const overlay = (
    <div className="modal__overlay">
      <div className="container">
        <h3>{props.error}</h3>
        <button
          onClick={() => props.onInvalid(false)}
          type="button"
          class="btn btn-danger"
        >
          CLOSE
        </button>
      </div>
    </div>
  );

  return createPortal(overlay, location);
};

export default Overlay;
