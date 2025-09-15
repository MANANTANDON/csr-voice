import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useDecodeHtml } from "@/hooks/useDecodeHtml";
import { API_URL } from "@/constant";
import { useReadingTime } from "@/hooks/useReadingtime";
import { VideoCont } from "./VideoCont";

export const Interviews = () => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);

  const fetchCategoryArticles = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_URL}/wp-json/custom/v1/posts/category/interview/format/standard?page=1&per_page=2`
      );
      setPosts(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching category articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryArticles();
  }, []);
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
                px: { xs: 1, md: 1.5 },
                mx: { xs: -1, md: 0 },
              }}
            >
              <Typography
                fontSize={{ xs: "28px", md: "38px" }}
                className="font-text-bold"
                sx={{ color: "#080808" }}
              >
                Interviews
              </Typography>
            </Box>
            <Grid container>
              <Grid item size={{ xs: 12, md: 8 }}>
                <a
                  href={`/post/${posts[0]?.categories[0]?.slug}/${posts[0]?.slug}/${posts[0]?.id}`}
                >
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
                        fontSize={{ xs: "20px", md: "26px" }}
                        lineHeight={{ xs: "28px", md: "32px" }}
                        className="font-text-bold"
                        component={"a"}
                        href={`/post/${posts[0]?.categories[0]?.slug}/${posts[0]?.slug}/${posts[0]?.id}`}
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
                        fontSize={{ xs: "14px", md: "16px" }}
                        className="font-normal"
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
                        sx={{ color: "#FFFFFF", mt: 1, mb: 2 }}
                        fontSize="12px"
                        className="font-normal"
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
                          fontSize="12px"
                          className="font-normal"
                        >
                          {useDecodeHtml(posts[0]?.categories[0]?.name)}
                        </Typography>
                        {` • ${useReadingTime(posts[0]?.content)}`}
                      </Typography>
                    </Box>
                  </Box>
                </a>
              </Grid>
              <Grid item size={{ xs: 12, md: 4 }}>
                <VideoCont />
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};
