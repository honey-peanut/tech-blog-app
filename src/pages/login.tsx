import React from "react";
import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import '../App.css';

export default function MainPage() {
  const navigate = useNavigate();
  const handleEvent = () => {
    navigate("/main");
  };

  const handleSubmit = () => {
    alert("아직 개발중입니다!");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Box
          className="topbox"
          sx={{
            width: "600px",
            height: "600px",
          }}
        >
          <Card
            sx={{
              width: "600px",
              height: "600px",
            }}
          >
            <Box>
              <Typography
                mt="60px"
                mb="60px"
                sx={{
                  display: "inline-block",
                  scale: "1.5",
                  cursor: "pointer",
                  userSelect: "none",
                }}
                onClick={handleEvent}
              >
                tech-blog
              </Typography>
              <Stack alignItems="center">
                <TextField
                  component="form"
                  label="ID"
                  sx={{
                    mb: "20px",
                    width: "400px",
                  }}
                  error={true}
                />
              </Stack>
              <Stack alignItems="center">
                <TextField
                  component="form"
                  label="PASSWORD"
                  sx={{
                    mb: "20px",
                    width: "400px",
                  }}
                />
              </Stack>
              <Button
                component="form"
                onClick={handleSubmit}
                variant="contained"
              >
                Sign in
              </Button>
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
}
