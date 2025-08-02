import { Box, Container, Drawer, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { CATMENU } from "@/constant";
import { useRouter } from "next/router";
import { Close, Menu, MenuRounded } from "@mui/icons-material";

export const Header = () => {
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState();

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
              <a href="/">
                <Image
                  src={"/images/csr.png"}
                  layout="intrinsic"
                  height={48}
                  width={132}
                />
              </a>
            </Box>
            <Box sx={{ display: { md: "none" } }}>
              <IconButton
                onClick={() => setOpenDrawer(true)}
                sx={{
                  border: "1.5px solid #e8e8e8",
                  borderRadius: "20%",
                  padding: "5px",
                }}
              >
                <MenuRounded />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 3.6,
              }}
            >
              {CATMENU?.map((item, key) => (
                <Typography
                  component="a"
                  href={item.link}
                  key={key}
                  sx={{
                    position: "relative",
                    borderBottom: "none",
                    textDecoration: "none",
                    fontWeight: router.asPath === item.link ? 700 : 400,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: router.asPath === item.link ? "100%" : "0%",
                      height: "3px",
                      backgroundColor: "#1877F2",
                      transition: "width 0.3s ease-in-out",
                    },
                    "&:hover::after": {
                      width: "100%",
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

      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
        PaperProps={{
          sx: {
            width: "100vw", // Full viewport width
          },
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
              border: "1.5px solid #e8e8e8",
            }}
          >
            <Box>
              <a href="/">
                <Image
                  src={"/images/csr.png"}
                  layout="intrinsic"
                  height={48}
                  width={132}
                />
              </a>
            </Box>
            <Box sx={{ display: { md: "none" } }}>
              <IconButton
                onClick={() => setOpenDrawer(false)}
                sx={{
                  border: "1.5px solid #e8e8e8",
                  borderRadius: "20%",
                  padding: "5px",
                }}
              >
                <Close />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {CATMENU?.map((item, key) => (
              <Box
                component="a"
                href={item.link}
                sx={{
                  borderBottom: "1.5px solid #e8e8e8",
                  width: "100%",
                  p: 2,
                  "&::after": {
                    bgcolor: "#1877F230",
                  },
                  "&:hover::after": {
                    bgcolor: "#1877F230",
                  },
                }}
              >
                <Typography
                  component="a"
                  href={item.link}
                  key={key}
                  sx={{
                    position: "relative",
                    borderBottom: "none",
                    textDecoration: "none",
                    pb: 0.5,
                    fontWeight: router.asPath === item.link ? 700 : 400,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: router.asPath === item.link ? "100%" : "0%",
                      height: "3px",
                      backgroundColor: "#1877F2",
                      transition: "width 0.3s ease-in-out",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {item?.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
