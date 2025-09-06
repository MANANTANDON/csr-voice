import { Box, Typography } from "@mui/material";
import React from "react";

export const AdvertRect = () => {
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
            height: "100px",
            width: { xs: "100%", md: "900px" },
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
