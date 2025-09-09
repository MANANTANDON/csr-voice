import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { MoreStories } from "./MoreStories";
import { useDecodeHtml } from "@/hooks/useDecodeHtml";
import { useReadingTime } from "@/hooks/useReadingtime";
import { Sharing } from "../Sharing/Sharing";
import { INIT_URI } from "@/constant";
import { AdvertSquare } from "../Advertisements/AdvertSquare";
import useDateFormat from "@/hooks/useDateFormat";

export const PostPage = ({ post }) => {
  console.log(post);
  const slug = `${INIT_URI}/post/${post?.categories[0]?.slug}/${post?.slug}/${post?.id}`;
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
              <Grid item size={{ xs: 12, md: 8 }} sx={{}}>
                <Box>
                  <Typography
                    className="font-bold"
                    fontSize={{ xs: "24px", md: "35px" }}
                    lineHeight={{ xs: "32px", md: "45px" }}
                  >
                    {useDecodeHtml(post?.title)}
                  </Typography>
                </Box>

                <Box sx={{ my: 1 }}>
                  <Typography className="font-medium">
                    {useDecodeHtml(post?.excerpt)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: 3,
                    mb: 3,
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "flex-start", md: "center" },
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    fontSize="14px"
                    sx={{ color: "#000000", mt: 1, mb: { xs: 2, md: 1 } }}
                    className="font-medium"
                  >
                    <Typography
                      variant="span"
                      sx={{ color: "#1877F2" }}
                      fontSize="14px"
                      className="font-medium"
                    >
                      {useDecodeHtml(post?.categories[0]?.name)}
                    </Typography>
                    {` • ${useReadingTime(post?.content)} • ${useDateFormat(
                      post?.modified
                    )}`}
                  </Typography>
                  <Sharing text={useDecodeHtml(post?.title)} slug={slug} />
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
                <Box
                  sx={{
                    borderTop: "1.5px solid #e8e8e8",
                    borderBottom: "1.5px solid #e8e8e8",
                    mt: 2,
                    mx: { xs: 0, md: 4, lg: 8 },
                  }}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: post?.content }}
                    className="post-cont"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    p: 2,
                  }}
                >
                  <Typography sx={{ mb: 2 }}>Share this Post on</Typography>
                  <Sharing text={useDecodeHtml(post?.title)} slug={slug} />
                </Box>
              </Grid>
              {/* Right Container */}
              <Grid
                item
                size={{ xs: 12, md: 4 }}
                sx={{
                  pl: { xs: 0, md: 4 },
                  pt: { xs: 2, md: 0 },
                  borderTop: { xs: "1.5px solid #e8e8e8", md: "none" },
                }}
              >
                <MoreStories />
                <AdvertSquare />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
