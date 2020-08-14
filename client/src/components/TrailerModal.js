import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { Product } from "../store/ProductContext";

function TrailerModal({ setTrailerModal, url, seturl }) {
  const store = useContext(Product).state;
  return (
    <div className="TrailerModal">
      <span
        onClick={() => {
          if (url) {
            seturl();
          } else {
            setTrailerModal({ ...store, trailerModal: false });
          }
        }}
      >
        <span
          className="ti-close"
          style={{ fontSize: "14px", transform: "translateY(-20px)" }}
        ></span>
      </span>
      <ReactPlayer
        controls
        url={url ? url : store.trailer}
        width="90%"
        height="90%"
      />
    </div>
  );
}

export default TrailerModal;
