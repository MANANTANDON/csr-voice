import { Layout } from "@/components/Layout/Layout";
import { PostPage } from "@/components/Post/PostPage";
import { RelatedNews } from "@/components/Post/RelatedNews";
import { API_URL } from "@/constant";
import axios from "axios";
import React from "react";
import { parseStringPromise } from "xml2js";

const Index = ({ post, rssItems, categroy }) => {
  return (
    <>
      <Layout marqueeData={rssItems}>
        <PostPage post={post?.data} />
        <RelatedNews catName={categroy} />
      </Layout>
    </>
  );
};

export async function getServerSideProps({ query }) {
  try {
    // Fetch custom posts from your CMS
    const postsResponse = await axios.get(
      `${API_URL}/wp-json/custom/v1/posts/${query?.slug}`
    );

    // Fetch RSS feed from TOI
    const rssResponse = await axios.get(
      "https://timesofindia.indiatimes.com/rssfeedstopstories.cms"
    );

    const parsedRSS = await parseStringPromise(rssResponse.data, {
      explicitArray: false,
    });

    const rssItems = parsedRSS?.rss?.channel?.item?.slice(0, 5) || [];

    return {
      props: {
        post: postsResponse.data,
        rssItems,
        error: null,
        categroy: query?.category,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        posts: [],
        rssItems: [],
        error: "Failed to fetch data",
        categroy: "",
      },
    };
  }
}

export default Index;
