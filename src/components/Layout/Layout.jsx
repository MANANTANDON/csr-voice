import { Box } from "@mui/material";
import React from "react";
import { Header } from "./Header/header";
import Image from "next/image";

export const Layout = ({ children }) => {
  return (
    <Box sx={{ m: -1, position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          zIndex: -1,
          top: { xs: 300, md: 500 },
          left: -350,
        }}
      >
        <Image
          src="/images/earth.png"
          height={612}
          width={612}
          style={{ opacity: 0.1 }}
          layout="intrinsic"
        />
      </Box>
      <Header />
      {children}
    </Box>
  );
};
