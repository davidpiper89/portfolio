import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <button onClick={goBack} className="backButton">
      Back to Home
    </button>
  );
};

export default BackButton;
