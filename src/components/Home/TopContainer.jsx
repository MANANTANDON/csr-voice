import React from "react";

import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useDecodeHtml } from "@/hooks/useDecodeHtml";
import { useReadingTime } from "@/hooks/useReadingtime";

export const TopContainer = ({ posts }) => {
  return (
    <Box sx={{ my: { xs: 2, md: 5 } }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            p: 2,
            borderRadius: "7px",
            border: "1.5px solid #e8e8e8",
            mx: { xs: -1, md: 0 },
          }}
        >
          <Typography
            fontSize={{ xs: "32px", md: "42px" }}
            className="font-700"
            sx={{
              color: "#080808",
              borderBottom: "3px solid #1877F2",
              pb: -2,
              mb: 2,
            }}
          >
            Latest Stories
          </Typography>
          <Grid container>
            {/* Left Grid */}
            <Grid item size={{ xs: 12, md: 7 }} sx={{ pr: { xs: 0, md: 3 } }}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  height: { xs: "400px", md: "600px" },
                  width: "100%",
                  borderRadius: "10px",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  // "&:hover": {
                  //   transform: "translateY(-8px)",
                  //   boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                  // },
                  "&:hover img": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                <a
                  href={`/post/${posts[0]?.categories[0]?.slug}/${posts[0]?.slug}/${posts[0]?.id}`}
                >
                  <Image
                    src={posts[0]?.featured_image}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    style={{
                      transition:
                        "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  />
                </a>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    px: { xs: 2, md: 4 },
                    background:
                      "linear-gradient(to top, #000000 30%, transparent)",
                    backdropFilter: "blur(1.5px)",
                  }}
                >
                  <Typography
                    fontSize="12px"
                    sx={{
                      color: "transparent",
                      mt: 2,
                      mb: 1,
                      pointerEvents: "none",
                    }}
                  >
                    4d616e616e
                  </Typography>
                  <Typography
                    component="a"
                    href={`/post/${posts[0]?.categories[0]?.slug}/${posts[0]?.slug}/${posts[0]?.id}`}
                    fontSize={{ xs: "25px", md: "30px" }}
                    lineHeight={{ xs: "28px", md: "35px" }}
                    className="font-500"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                      color: "#FFFFFF",
                      my: 1,
                      "&:hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {useDecodeHtml(posts[0]?.title)}
                  </Typography>
                  <Typography
                    fontSize="14px"
                    className="font-500"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                      color: "#e8e8e8",
                      my: 1,
                    }}
                  >
                    {useDecodeHtml(posts[0]?.excerpt)}
                  </Typography>
                  <Typography
                    fontSize={{ xs: "11px", sm: "12px" }}
                    sx={{ color: "#FFFFFF", mt: 1, mb: 2 }}
                    className="font-600"
                  >
                    <Typography
                      component={"a"}
                      href={`/category/${posts[0]?.categories[0]?.slug}`}
                      sx={{
                        bgcolor: "#1877F2",
                        color: "#ffffff",
                        py: 0.2,
                        px: 0.5,
                        borderRadius: "4px",
                      }}
                      fontSize={{ xs: "12px", sm: "13px" }}
                      className="font-600"
                    >
                      {posts[0]?.categories[0]?.name}
                    </Typography>
                    {` • ${useReadingTime(posts[0]?.content)}`}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            {/* Right Grid */}
            <Grid item size={{ xs: 12, md: 5 }} sx={{ my: { xs: 2, md: 0 } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                {posts?.slice(1, 7).map((item, key) => (
                  <Box
                    key={key}
                    sx={{
                      display: "flex",
                      gap: 2,
                      width: "100%",
                      maxWidth: "600px",
                      flexDirection: "row",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        height: "90px",
                        width: "120px",
                        maxWidth: "150px",
                        borderRadius: "5px",
                        flexShrink: 0,
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover img": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <a
                        href={`/post/${item?.categories[0]?.slug}/${item?.slug}/${item?.id}`}
                      >
                        <Image
                          src={item?.featured_image}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                          style={{
                            transition:
                              "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                          }}
                        />
                      </a>
                    </Box>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        component="a"
                        href={`/post/${item?.categories[0]?.slug}/${item?.slug}/${item?.id}`}
                        fontSize={{ xs: "20px", sm: "20px" }}
                        lineHeight={{ xs: "24px", sm: "24px" }}
                        className="font-500"
                        sx={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: "2",
                          WebkitBoxOrient: "vertical",
                          color: "#000000",
                          "&:hover": {
                            color: "#00000090",
                            cursor: "pointer",
                          },
                        }}
                      >
                        {useDecodeHtml(item?.title)}
                      </Typography>
                      <Typography
                        fontSize={{ xs: "12px", sm: "14px" }}
                        sx={{ color: "#000000", my: 1 }}
                        className="font-600"
                      >
                        <Typography
                          component={"a"}
                          href={`/category/${item?.categories[0]?.slug}`}
                          sx={{ color: "#1877F2" }}
                          fontSize={{ xs: "12px", sm: "14px" }}
                          className="font-600"
                        >
                          {useDecodeHtml(item?.categories[0]?.name)}
                        </Typography>
                        {` • ${useReadingTime(item?.content)}`}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
