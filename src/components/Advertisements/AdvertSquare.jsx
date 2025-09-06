import { Box, Typography } from "@mui/material";
import React from "react";

export const AdvertSquare = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: 5,
        }}
      >
        <Box
          sx={{
            height: { xs: "250px", md: "300px" },
            width: { xs: "250px", md: "300px" },
            bgcolor: "#e8e8e8",
            borderRadius: "7px",
          }}
        >
          <Typography
            textAlign={"center"}
            sx={{ fontSize: "12px", my: 1.5, color: "#00000070" }}
          >
            Advertisement
          </Typography>
        </Box>
      </Box>
    </>
  );
};
