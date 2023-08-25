import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BiSolidPaintRoll } from "react-icons/bi";
import { auth } from "../utils/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { BsCheck2Circle } from "react-icons/bs";
import handleResetError from "../utils/handleResetError";
import { BiSolidError } from "react-icons/bi";
import { BiSolidCheckCircle } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";

const Button = styled.button`
  width: 100%;
  padding: 15px 0;
  background: ${(props) => props.bg || "#fff"};
  color: ${(props) => props.color || "#000"};
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  transition: background 200ms ease-in-out;
  font-weight: bold;

  &:hover {
    background: ${(props) => props.hv || "rgba(255, 255, 255, 0.8)"};
  }

  > * {
    pointer-events: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin-top: -40px;

  div {
    width: 450px;

    @media screen and (max-width: 370px) {
      max-width: 300px;
    }

    p {
      margin-bottom: -10px;

      a {
        color: #aaa;
      }
    }
  }
`;

const Form = styled.form`
  width: 400px;
  input {
    diplay: block;
    background: #242424;
    color: #f0f0f0;
    marign-bottom: 20px;
    padding: 15px 15px;
    width: 100%;
    border-radius: 10px;
    height: 45px;
    border: 0;
    font-size: 16px;
    outline: none;

    &:hover {
      background: #2b2b2b;
    }
    &:focus {
      border: 2px solid #464eb8;
    }
  }
`;

const SuccessMessage = styled.p`
  background: #2d492d;
  color: #a9f5a9;
  font-size: 16px;
  text-align: center;
  width: 435px;
  border-radius: 5px;
  padding: 10px 15px;
`;

function Reset() {
  const [emailVarification, setEmailVarification] = useState("");
  const [resetVarification, setresetVarification] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailVarification = async (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, emailVarification)
      .then(() => {
        console.log("email sent");
        setresetVarification(true);
        setError(null);
        setTimeout(() => {
          navigate("/");
        }, 5000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("reset error: ", errorCode, errorMessage);
        const errorMsg = handleResetError(error);
        setError(errorMsg);
      });
  };

  return (
    <div style={{ height: "100vh" }}>
      {/* <h1 className='authPageLogo'>Piczer</h1> */}
      <h1
        className="authPageLogo vertical-center"
        style={{ color: "#7B83EB", height: "10%" }}
      >
        <BiSolidPaintRoll
          style={{ marginRight: "15px", width: "30px", height: "30px" }}
        />
        Piczer
      </h1>
      <Container style={{ height: "90%" }}>
        {error && (
          <p
            className="auth-msg"
            style={{ marginBottom: "15px", borderRadius: "5px" }}
          >
            <BiSolidError
              style={{
                color: "#ff3769",
                width: "25px",
                height: "25px",
                marginRight: 15,
              }}
            />{" "}
            {error}
          </p>
        )}
        <div>
          {resetVarification && (
            <SuccessMessage
              className="vertical-center"
              style={{ marginBottom: "15px" }}
            >
              <BiSolidCheckCircle
                style={{
                  width: "25px",
                  height: "25px",
                  marginRight: "15px",
                  fill: "#31e22f",
                }}
              />
              An email with a password reset link has been sent.
            </SuccessMessage>
          )}
          <h1>Forgot your password?</h1>
          <p className="less-important reset-less-imp-margin">
            Please type your email below to receive a link to reset your
            password.
          </p>
          <div className="form-separator"></div>
          <Form onSubmit={handleEmailVarification}>
            <input
              name="email"
              type="email"
              placeholder="someone@example.com"
              required
              onChange={(e) => setEmailVarification(e.target.value)}
            />
            <Button
              color="white"
              bg="#505AC9"
              hv="#464EB8"
              style={{ marginTop: "25px" }}
            >
              Reset Password
            </Button>

          </Form>
          
        </div>
      </Container>
    </div>
  );
}

export default Reset;
