import { NewsCard } from "@/components/Cards/NewsCard";
import { Container, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import axios from "axios";
import React from "react";

const Category = ({ posts }) => {
  console.log(posts, "Manan Tandon");
  return (
    <>
      <Container maxWidth="xl">
        <Typography fontSize="28px" sx={{ py: 2 }}>
          {posts?.category?.name}
        </Typography>
        <Grid container sx={{ bgcolor: "#FFFFFF" }}>
          {posts?.data?.map((item, key) => (
            <Grid item size={{ xs: 12, md: 3 }} key={key}>
              <NewsCard news={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Category;

export async function getServerSideProps({ query }) {
  try {
    const response = await axios.get(
      `https://dev.csrvoice.com/wp-json/custom/v1/posts/category/${query?.slug}?page=1&per_page=10`
    );

    return {
      props: {
        posts: response.data,
        error: null,
      },
    };
  } catch (error) {
    console.error("Error fetching posts:", error);

    return {
      props: {
        posts: [],
        error: "Failed to fetch posts",
      },
    };
  }
}
