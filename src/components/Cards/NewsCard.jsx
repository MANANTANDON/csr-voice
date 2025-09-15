import { useDecodeHtml } from "@/hooks/useDecodeHtml";
import { useReadingTime } from "@/hooks/useReadingtime";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const NewsCard = ({ news }) => {
  return (
    <>
      <Card variant="outlined" sx={{ border: "none", height: "360px" }}>
        <CardContent
          sx={{
            px: 1.5,
            py: 0,
            "&:last-child": {
              paddingBottom: 0,
            },
          }}
        >
          <a
            href={`/post/${news?.categories[0]?.slug}/${news?.slug}/${news?.id}`}
          >
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                height: "200px",
                width: "100%",
                borderRadius: "10px",
                border: "1.5px solid #eeeeee",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "& img": {
                  transition: "transform 0.3s ease",
                },
                "&:hover img": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <Image
                src={news?.featured_image}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt={news?.title}
              />
            </Box>
          </a>
          <Typography
            fontSize="13px"
            sx={{ color: "#000000", my: 1 }}
            className="font-normal"
          >
            <Typography
              variant="span"
              component={"a"}
              href={`/category/${news?.categories[0]?.slug}`}
              sx={{ color: "#1877F2" }}
              fontSize="13px"
              className="font-bold"
            >
              {useDecodeHtml(news?.categories[0]?.name)}
            </Typography>
            {` • ${useReadingTime(news?.content)}`}
          </Typography>
          <Typography
            component={"a"}
            href={`/post/${news?.categories[0]?.slug}/${news?.slug}/${news?.id}`}
            fontSize="20px"
            lineHeight="26px"
            className="font-text-bold"
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
            {useDecodeHtml(news?.title)}
          </Typography>
          <Typography
            fontSize="14px"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              my: 1,
            }}
            className="font-normal"
          >
            {useDecodeHtml(news?.excerpt)}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
