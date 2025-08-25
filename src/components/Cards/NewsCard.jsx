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
            fontSize={{ xs: "12px", sm: "14px" }}
            sx={{ color: "#000000", my: 1 }}
          >
            <Typography
              variant="span"
              component={"a"}
              href={`/category/${news?.categories[0]?.slug}`}
              sx={{ color: "#1877F2" }}
              fontSize={{ xs: "12px", sm: "14px" }}
            >
              {useDecodeHtml(news?.categories[0]?.name)}
            </Typography>
            {` • ${useReadingTime(news?.content)}`}
          </Typography>
          <Typography
            component={"a"}
            href={`/post/${news?.categories[0]?.slug}/${news?.slug}/${news?.id}`}
            fontSize={{ xs: "20px", sm: "22px" }}
            lineHeight={{ xs: "24px", sm: "28px" }}
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
          >
            {useDecodeHtml(news?.excerpt)}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
