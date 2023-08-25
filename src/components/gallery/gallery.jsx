import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../utils/firebase";
import { storage } from "../../utils/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { ThreeDots } from "react-loader-spinner";
import Modal from '../modal/modal'

import {
  Wrapper,
  Container,
  Image,
  imgVariant,
  containerVariant,
} from "./galleryStyles";

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  const storageRef = ref(storage, "images/");
  useEffect(() => {
    listAll(storageRef).then((res) => {
      console.log("response", res);
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setGallery((prevState) => [...prevState, url]);
          setLoading(false);
          // setGallery([url]);
        });
      });
    });
  }, []);

  console.log(gallery);

  return (
    <React.Fragment>
      {/* <Modal /> */}
      <Container initial="hidden" variants={containerVariant}>
        {loading ? (
          <ThreeDots
            height="90"
            width="90"
            radius="9"
            color="#505AC9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
              // border: "2px solid red",
              position: "absolute",
              transformTranslate: "50%, -50%",
            }}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          gallery.map((item, id) => (
            <Wrapper id="wrapper" key={id}>
              <div style={{ display: "block" }}>
                <Image variants={imgVariant}>
                  <img className="lazyload" src={item} />
                </Image>
              </div>

              <div id="overlay">
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
              </div>
            </Wrapper>
          ))
        )}
      </Container>
    </React.Fragment>
  );
}

export default Gallery;
