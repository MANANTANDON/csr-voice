import React, { useEffect, useState } from "react";

import { Box, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { NewsCard } from "../Cards/NewsCard";

export const Laws = () => {
  const [posts, setPosts] = useState();
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(true);

  const fetchCategoryArticles = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://dev.csrvoice.com/wp-json/custom/v1/posts/category/laws?page=1&per_page=4`
      );
      setCategory(response?.data?.category);
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
        <Box sx={{ my: 3 }}>
          <Container maxWidth="xl">
            <Box
              sx={{
                bgcolor: "#FFFFFF",
                px: 2,
                py: 1,
                borderRadius: "7px",
                border: "1.5px solid #e8e8e8",
              }}
            >
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
                  {category?.name}
                </Typography>
                <Typography
                  component="a"
                  href={`/category/${category?.slug}`}
                  fontSize={{ xs: "16px", md: "18px" }}
                  sx={{
                    color: "#1877F2",
                    "&:hover": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  See All
                </Typography>
              </Box>
              <Grid container>
                {posts?.map((item, key) => (
                  <Grid item size={{ xs: 12, md: 3 }} key={key}>
                    <NewsCard news={item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
};
