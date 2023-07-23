import React from "react";
import { AppBar, Typography, Box, Button, Link } from "@mui/material";

const logoutHandler = () => {
  localStorage.setItem("token", null);
};
const Appbar = () => {
  return (
    <AppBar
      sx={{
        display: "flex",
        width: "100vw",
        height: "60px",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ padding: 2, fontWeight: "bold", fontSize: "20px" }}>
        COURSESITE{" "}
      </Typography>
      <Typography sx={{ padding: 2, fontWeight: "bold", fontSize: "20px" }}>
        AdminName:
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Button variant="contained" color="inherit">
          <Link href="/" underline="none">
            ADD COURSE
          </Link>
        </Button>
        <Button variant="outline" color="inherit" onClick={logoutHandler}>
          <Link href="/login" underline="none" sx={{ color: "white" }}>
            LOGOUT
          </Link>
        </Button>
      </Box>
    </AppBar>
  );
};

export default Appbar;
