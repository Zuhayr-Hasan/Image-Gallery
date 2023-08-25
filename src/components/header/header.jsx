import React from "react";
import { useState } from "react";
// import { db } from '../../utils/firebase'
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../utils/firebase";

import { Upload, Container, Heading } from "./headerStyles";
import { BsPlusCircleFill } from "react-icons/bs";

function Header() {
  const [fileUpload, setFileUpload] = useState(null);
  const [flag, setFlag] = useState(false);

  // const galleryCollectionRef = collection(db, 'gallery')
  console.log(fileUpload);

  const handleUploadFile = async (e) => {
    e.preventDefault();

    const fileUpload = e.target.files[0];
    e.target.value = "";

    if (!fileUpload) return;
    const filesFolderRef = ref(storage, `images/${fileUpload.name}`);

    try {
      await uploadBytes(filesFolderRef, fileUpload);
    } catch (err) {
      console.error(err);
    }
  };

  const svgStyle = {
    fill: "blue",
    transition: "fill 0.3s ease-in-out",
  };

  const handleHover = () => {
    return (svgStyle.fill = "lightblue");
  };

  const handleHoverExit = () => {
    svgStyle.fill = "blue";
  };

  return (
    <Container>
      <Heading>Explore and Share your imaginations</Heading>
      <Upload>
        <label>
          <input
            aria-label="Upload Image"
            type="file"
            onChange={handleUploadFile}
          />
          <div>
            <svg
              style={{ cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              width="65"
              height="65"
              viewBox="0 0 46 46"
            >
              <g
                id="Group_1"
                data-name="Group 1"
                transform="translate(-359 -237)"
              >
                <circle
                  id="Ellipse_1"
                  data-name="Ellipse 1"
                  cx="23"
                  cy="23"
                  r="23"
                  transform="translate(359 237)"
                  fill="#2b2b2b"
                />
                <g id="plus" transform="translate(368 246)">
                  <line
                    id="Line_1"
                    data-name="Line 1"
                    y2="19"
                    transform="translate(14.3 5)"
                    fill="none"
                    stroke="#f0f0f0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    x2="19"
                    transform="translate(4.5 15)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                </g>
              </g>
            </svg>
          </div>
        </label>
      </Upload>
    </Container>
  );
}

export default Header;
