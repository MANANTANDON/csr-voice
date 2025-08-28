import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useDecodeHtml } from "@/hooks/useDecodeHtml";
import { useReadingTime } from "@/hooks/useReadingtime";
import { API_URL } from "@/constant";

export const MoreStories = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const postsResponse = await axios.get(
        `${API_URL}/wp-json/custom/v1/posts/format/standard?page=1&per_page=10`
      );
      setData(postsResponse?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          borderRadius: "10px",
          border: "1.5px solid #e8e8e8",
          bgcolor: "#e8e8e8",
        }}
      >
        <CardContent>
          <Typography
            className="font-500"
            fontSize={{ xs: "28px", md: "30px" }}
            sx={{ mb: 2, borderBottom: "1.5px solid #000000" }}
          >
            <i> More Stories</i>
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {data?.map((item, key) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "normal",
                  gap: 2,
                }}
                key={key}
              >
                <Box sx={{ width: "150px" }}>
                  <a
                    href={`/post/${item?.categories[0]?.slug}/${item?.slug}/${item?.id}`}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        height: "70px",
                        width: "100px",
                        borderRadius: "5px",
                      }}
                    >
                      <Image
                        src={item?.featured_image}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </Box>
                  </a>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Typography
                    component="a"
                    href={`/post/${item?.categories[0]?.slug}/${item?.slug}/${item?.id}`}
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                      "&:hover": {
                        color: "#00000080",
                      },
                    }}
                  >
                    {useDecodeHtml(item?.title)}
                  </Typography>
                  <Typography
                    fontSize={{ xs: "11px", sm: "12px" }}
                    sx={{ color: "#000000", my: 0.5 }}
                  >
                    <Typography
                      component="a"
                      href={`/category/${item?.categories[0].slug}`}
                      sx={{ color: "#1877F2" }}
                      fontSize={{ xs: "11px", sm: "12px" }}
                    >
                      {useDecodeHtml(item?.categories[0]?.name)}
                    </Typography>
                    {` • ${useReadingTime(item?.content)}`}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
