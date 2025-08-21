import { NewsCard } from "@/components/Cards/NewsCard";
import { Layout } from "@/components/Layout/Layout";
import { Box, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { parseStringPromise } from "xml2js";

const Search = ({ posts, rssItems, searchtext }) => {
  return (
    <>
      <Layout marqueeData={rssItems}>
        <Box
          sx={{
            my: { xs: 2, md: 5 },
            height: posts?.data?.length <= 4 && "100vh",
          }}
        >
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
                Showing results for :{" "}
                <span style={{ color: "#1877F2" }}>{searchtext}</span>
              </Typography>
              <Grid container rowGap={{ xs: 1, md: 5 }}>
                {posts?.data?.map((item, key) => (
                  <Grid item size={{ xs: 12, md: 3 }} key={key}>
                    <NewsCard news={item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const searchText = query.text || "";

  try {
    // ✅ WP Native Search API
    const postsResponse = await axios.get(
      `https://dev.csrvoice.com/wp-json/custom/v1/search?keyword=${searchText}&page=1&per_page=4`
    );

    // ✅ RSS API
    const rssResponse = await axios.get(
      "https://timesofindia.indiatimes.com/rssfeedstopstories.cms"
    );

    const parsedRSS = await parseStringPromise(rssResponse.data, {
      explicitArray: false,
    });

    const rssItems = parsedRSS?.rss?.channel?.item?.slice(0, 5) || [];

    return {
      props: {
        posts: postsResponse.data,
        rssItems,
        searchtext: searchText,
        error: null,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        posts: [],
        rssItems: [],
        searchtext: searchText,
        error: "Failed to fetch data",
      },
    };
  }
}

export default Search;
