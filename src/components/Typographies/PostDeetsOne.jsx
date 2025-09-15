import { useDecodeHtml } from "@/hooks/useDecodeHtml";
import { useReadingTime } from "@/hooks/useReadingtime";
import { Typography } from "@mui/material";
import React from "react";

export const PostDeetsOne = ({ item }) => {
  return (
    <>
      <Typography
        fontSize="13px"
        sx={{ color: "#000000", my: 1 }}
        className="font-normal"
      >
        <Typography
          component={"a"}
          href={`/category/${item?.categories[0]?.slug}`}
          sx={{ color: "#1877F2" }}
          fontSize="13px"
          className="font-bold"
        >
          {useDecodeHtml(item?.categories[0]?.name)}
        </Typography>
        {` • ${useReadingTime(item?.content)}`}
      </Typography>
    </>
  );
};
