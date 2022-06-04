import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SettingsIcon from "@mui/icons-material/Settings";
import EmailIcon from "@mui/icons-material/Email";
import Container from "@mui/material/Container";
function Settings() {
  const [open, setopen] = useState(false);
  const handleOpen = () => setopen(true);
  const handleClose = () => setopen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    height: "85vh",
    bgcolor: "#FFF",
    borderRadius: "5px",
  };
  const theme = createTheme({
    palette: {
      text: {
        // Purple and green play nicely together.
        main: "#A6A6A6",
        dark: "#222",
      },
      hover: {
        // This is green.A700 as hex.
        main: "#EAEAEA",
      },
    },
    typography: {
      light: {
        color: "#a6a6a6",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button onClick={handleOpen} color="text">
          {" "}
          <SettingsIcon /> Settings{" "}
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="app-container">
            <Box
              className="sidebar"
              sx={{ bgcolor: "#fafafa", flex: 0.3, padding: "15px" }}
            >
              <Box className="sidebar-category">
                <Typography variant="light" color="text">
                  Email
                </Typography>
                <Box className="sidebar-item">
                  <Button color="text">
                    {" "}
                    <EmailIcon /> Templates{" "}
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box padding="10%" flex=".7">
              <Typography variant="h4" fontWeight={600}>
                Email templates
              </Typography>
              <Typography variant="light">
                Set up templates for each type of email you send
              </Typography>
            </Box>
          </Box>
        </Modal>
      </ThemeProvider>
    </>
  );
}

export default Settings;
