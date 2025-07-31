import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { CATMENU } from "../../../../constant";

export const Header = () => {
  return (
    <>
      <Box
        sx={{ borderBottom: "1.5px solid #e8e8e8", bgcolor: "#FFFFFF", py: 2 }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Image
                src={"/images/csr.png"}
                layout="intrinsic"
                height={48}
                width={132}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3.6 }}>
              {CATMENU?.map((item, key) => (
                <Typography
                  component="a"
                  href={item.link}
                  key={key}
                  sx={{
                    position: "relative",
                    borderBottom: "none",
                    textDecoration: "none",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "0%",
                      height: "3px",
                      backgroundColor: "#1877F2",
                      transition: "width 0.3s ease-in-out",
                    },
                    "&:hover::after": {
                      width: "100%",
                      fontWeight: 700,
                    },

                    "&:hover": {
                      fontWeight: 700,
                    },
                  }}
                >
                  {item?.name}
                </Typography>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
