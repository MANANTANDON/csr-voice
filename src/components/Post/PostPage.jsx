import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { MoreStories } from "./MoreStories";

export const PostPage = ({ post }) => {
  console.log(post, "POST. DATA");
  return (
    <>
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
            <Grid container>
              <Grid item size={{ xs: 12, md: 8.5 }} sx={{ overflow: "hidden" }}>
                <Box>
                  <Typography
                    className="font-700"
                    fontSize={{ xs: "28px", md: "45px" }}
                    lineHeight={{ xs: "32px", md: "55px" }}
                  >
                    {post?.title}
                  </Typography>
                </Box>

                <Box sx={{ my: 1 }}>
                  <Typography
                    className="font-500"
                    fontSize={{ xs: "16px", md: "18px" }}
                  >
                    {post?.excerpt}
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    fontSize={{ xs: "14px", sm: "16px" }}
                    sx={{ color: "#000000", my: 1 }}
                  >
                    <Typography
                      variant="span"
                      sx={{ color: "#1877F2" }}
                      fontSize={{ xs: "14px", sm: "16px" }}
                    >
                      {post?.categories[0]?.name}
                    </Typography>
                    {" • 10 min read"}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "7px",
                    border: "1px solid #eeeeee",
                    position: "relative",
                    height: { xs: "200px", md: "500px" },
                    width: "100%",
                    borderRadius: "7px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={post?.featured_image}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
                <Box sx={{ borderTop: "1.5px solid #e8e8e8", mt: 2 }}>
                  <div
                    dangerouslySetInnerHTML={{ __html: post?.content }}
                    className="font-500 post-cont"
                  />
                </Box>
              </Grid>
              {/* Right Container */}
              <Grid
                item
                size={{ xs: 12, md: 3.5 }}
                sx={{
                  pl: { xs: 0, md: 2 },
                  pt: { xs: 2, md: 0 },
                  borderTop: { xs: "1.5px solid #e8e8e8", md: "none" },
                }}
              >
                <MoreStories />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
