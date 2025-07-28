import { Box } from "@mui/material";
import React from "react";
import { Header } from "./Header/header";

export const Layout = ({ children }) => {
  return (
    <Box sx={{ m: -1 }}>
      <Header />
      {children}
    </Box>
  );
};
