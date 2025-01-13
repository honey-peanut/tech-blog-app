import React from "react";
import logo from "../logo.svg";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { useRoutes } from "react-router-dom";
// import '../App.css';

export default function MainPage() {
  // const navigate = useRoutes(add);
  const navigate = useNavigate();
  const handleEvent = () => {
    navigate("/login");
  };

  return (
    <>
      <Box
        mb="60px"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <h1>tech-blog</h1>
      </Box>
      <Box>
        <Button
          variant="contained"
          onClick={handleEvent}
          sx={{
            textTransform: "none",
            scale: "1.5",
          }}
        >
          Sign in
        </Button>
      </Box>
    </>
  );
}
