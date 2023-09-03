import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../utils/firebase";
import { auth, storage } from "../../utils/firebase";
import { ref, listAll, getDownloadURL, deleteObject } from "firebase/storage";
import { ThreeDots } from "react-loader-spinner";
import Modal from "../modal/modal";
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
    listAll(storageRef)
      .then((res) => {
        const promises = res.items.map((item) => getDownloadURL(item));
        return Promise.all(promises);
      })
      .then((urls) => {
        setGallery(urls); // Update the state with all URLs at once
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  const handleDelete = (e) => {
    if (e.target.classList.contains("delete-item")) {
      const userId = e.target.id;
      const desertRef = ref(storage, `images/gallery1.jpg`);

      // Delete the file
      deleteObject(desertRef)
        .then(() => {
          // File deleted successfully
          console.log("file deleted successfully.. 😉");

          // setGallery((prevGallery) =>
          //   prevGallery.filter((galleryItem) => galleryItem !== item)
          // );
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
          console.log("file is not deleted 😭", error);
        });
    }
  };

  console.log("this is gallery", gallery);

  console.log("this is id", auth.currentUser);

  return (
    <React.Fragment>
      {/* <Modal /> */}
      <Container
        initial="hidden"
        variants={containerVariant}
        onClick={handleDelete}
      >
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
                <button id={id} className="delete-item">
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
