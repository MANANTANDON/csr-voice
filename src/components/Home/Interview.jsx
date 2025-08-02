import React, { useEffect, useState } from "react";

import { Box, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { NewsCard } from "../Cards/NewsCard";
import Image from "next/image";

export const Interviews = () => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);

  const fetchCategoryArticles = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://dev.csrvoice.com/wp-json/custom/v1/posts/category/interview?page=1&per_page=4`
      );
      setPosts(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching category articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => fetchCategoryArticles(), []);
  return (
    <>
      {!loading && (
        <Box sx={{ my: 5 }}>
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                my: 1,
                px: 1.5,
              }}
            >
              <Typography
                fontSize={{ xs: "32px", md: "52px" }}
                className="font-700"
                sx={{ color: "#080808" }}
              >
                Interviews
              </Typography>
              {/* <Typography
                fontSize="18px"
                sx={{
                  color: "#1877F2",
                  "&:hover": {
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}
              >
                See All
              </Typography> */}
            </Box>
            <Grid container>
              <Grid item size={{ xs: 12 }}>
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: { xs: "450px", md: "600px" },
                    width: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <Image
                    src={posts[0]?.featured_image}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
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
                      fontSize="30px"
                      lineHeight="35px"
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
                      {posts[0]?.title}
                    </Typography>
                    <Typography
                      fontSize="14px"
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
                      {posts[0]?.excerpt}
                    </Typography>
                    <Typography
                      fontSize="12px"
                      sx={{ color: "#1877F2", mt: 1, mb: 2 }}
                    >{`${posts[0]?.categories[0]?.name} • 10 min read`}</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};
