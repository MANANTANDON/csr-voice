import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NewsCard } from "../Cards/NewsCard";
import axios from "axios";

export const RelatedNews = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://dev.csrvoice.com/wp-json/custom/v1/posts/category/news?page=1&per_page=10`
      );
      setData(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              p: 2,
              borderRadius: "7px",
              border: "1.5px solid #e8e8e8",
            }}
          >
            <Typography
              fontSize={{ xs: "32px", md: "52px" }}
              className="font-700"
              sx={{
                color: "#080808",
                borderBottom: "3px solid #1877F2",
                pb: -2,
                mb: 2,
              }}
            >
              Related News
            </Typography>
            <Grid container rowGap={{ xs: 1, md: 5 }}>
              {data?.map((item, key) => (
                <Grid item size={{ xs: 12, md: 3 }} key={key}>
                  <NewsCard news={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
