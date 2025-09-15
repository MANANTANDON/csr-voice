import React, { useEffect, useState } from "react";

import { Box, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { NewsCard } from "../Cards/NewsCard";
import { API_URL } from "@/constant";

export const SocialStocks = () => {
  const [posts, setPosts] = useState();
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(true);

  const fetchCategoryArticles = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_URL}/wp-json/custom/v1/posts/category/social-stocks/format/standard?page=1&per_page=2`
      );
      setCategory(response?.data?.category);
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
        <Box sx={{ my: 1 }}>
          <Container maxWidth="xl">
            <Box sx={{ borderRadius: "7px" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  my: { xs: 2, md: 1 },
                  px: 1.5,
                }}
              >
                <Typography
                  fontSize={{ xs: "28px", md: "38px" }}
                  className="font-text-bold"
                  sx={{ color: "#080808" }}
                >
                  {category?.name}
                </Typography>
                <Typography
                  component="a"
                  href={`/category/${category?.slug}`}
                  fontSize={{ xs: "16px", md: "18px" }}
                  className="font-600"
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
              <Grid container gap={{ xs: 2, md: 0 }} sx={{ mt: 2 }}>
                {posts?.map((item, key) => (
                  <Grid item size={{ xs: 12, md: 6 }} key={key}>
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
