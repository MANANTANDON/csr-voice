import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const PostPage = ({ post }) => {
  console.log(post, "POST. DATA");
  return (
    <>
      <Box sx={{ my: { xs: 2, md: 5 }, mx: { xs: -1, md: 0 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              p: 2,
              borderRadius: "7px",
              border: "1.5px solid #e8e8e8",
            }}
          >
            <Grid container>
              <Grid item size={{ xs: 12, md: 8.5 }}>
                <Box>
                  <Typography className="font-700" fontSize={"45px"}>
                    {post?.title}
                  </Typography>
                </Box>
                <Box sx={{ my: 2 }}>
                  <Typography className="font-500" fontSize={"18px"}>
                    {post?.excerpt}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "7px",
                    border: "1px solid #eeeeee",
                  }}
                >
                  <Image
                    src={post?.featured_image}
                    height={300}
                    width={500}
                    layout="intrinsic"
                  />
                </Box>
                <Box>
                  <div
                    dangerouslySetInnerHTML={{ __html: post?.content }}
                    className="font-500 post-cont"
                  />
                </Box>
              </Grid>
              <Grid
                item
                size={{ xs: 12, md: 3.5 }}
                sx={{ pl: { xs: 0, md: 2 } }}
              >
                <Typography className="font-500" fontSize="28px">
                  <i> More Stories</i>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
