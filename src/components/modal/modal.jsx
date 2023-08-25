import React, { useEffect, useState, useRef, useContext } from "react";
import { Container, Img, Overlay, Options } from "./modalStyles";

// import ReactConfirmAlert, { confirmAlert } from "react-confirm-alert";

function Modal() {
  return (
    <Overlay className="overlay">
      <button
        style={{
          position: "absolute",
          top: "-10px",
          left: "0px",
          padding: "10px",
        }}
        className="close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <Container>
        <Options>
          <React.Fragment>
            <React.Fragment>
              <a>Download Image</a>
              <button className="delete-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-trash-2"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </button>
            </React.Fragment>
          </React.Fragment>
        </Options>
        <Img>
          <img
            className="lazyload"
            data-sizes="auto"
            // src={genLowUrl(img.filename)}
            // data-src={genUrl(img.filename)}
            // data-srcset={genSrcset(img.filename)}
            alt=""
          />
          <div></div>
        </Img>
      </Container>
    </Overlay>
  );
}

export default Modal;
