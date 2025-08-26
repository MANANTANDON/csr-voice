"use client";

import { Facebook, LinkedIn, WhatsApp, X } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

export const Sharing = ({ slug, text }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        <a
          href={`https://api.whatsapp.com/send?text=${text} ${slug}`}
          style={{
            padding: "10px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          target="_blank"
        >
          <WhatsApp sx={{ color: "#25D366" }} />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?url=${slug}&title=${text}`}
          style={{
            padding: "10px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          target="_blank"
        >
          <LinkedIn sx={{ color: "#0A66C2" }} />
        </a>
        <a
          href={`https://www.facebook.com/sharer.php?u=${slug}`}
          style={{
            padding: "10px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          target="_blank"
        >
          <Facebook fontSize="small" sx={{ color: "#1877F2" }} />
        </a>
        <a
          href={`https://twitter.com/share?url=${slug}&text=${text}`}
          style={{
            padding: "10px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          target="_blank"
        >
          <X sx={{ color: "#000000" }} />
        </a>
      </Box>
    </>
  );
};
