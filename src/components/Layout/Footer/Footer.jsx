import { CATMENU, MOREMENU } from "@/constant";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Box
        sx={{
          border: "1.5px solid #e8e8e8",
          bgcolor: "#FFFFFF",
          mt: "50px",
        }}
      >
        <Container maxWidth="xl" sx={{ pt: 5 }}>
          <Grid container sx={{ borderBottom: "1.5px solid #e8e8e8", pb: 3 }}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Image
                src={"/images/csr.png"}
                layout="intrinsic"
                height={120}
                width={320}
              />
            </Grid>
            <Grid
              item
              size={{ xs: 12, md: 6 }}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pr: { xs: 0, md: 4 },
              }}
            >
              <Box>
                <Typography className="font-700" fontSize={"18px"}>
                  Categories
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 1,
                  }}
                >
                  {CATMENU?.map((item, key) => (
                    <Typography
                      component="a"
                      href={item.link}
                      className="font-500"
                      key={key}
                      sx={{ width: "fit-content" }}
                    >
                      {item?.name}
                    </Typography>
                  ))}
                </Box>
              </Box>
              <Box>
                <Typography className="font-700" fontSize={"18px"}>
                  Quick Links
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 1,
                  }}
                >
                  {MOREMENU?.map((item, key) => (
                    <Typography
                      component="a"
                      href={item.link}
                      className="font-500"
                      key={key}
                      sx={{ width: "fit-content" }}
                      fontSize={"16px"}
                    >
                      {item?.name}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              py: 2,
            }}
          >
            <Typography sx={{ fontSize: "14px", color: "#41444B" }}>
              © {currentYear} CSR Voice. All Rights Reserved.
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "#41444B" }}>
              Powdered by Snowchild Studios
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};
