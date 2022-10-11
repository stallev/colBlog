import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { fetchAPI } from "../../lib/api";
import Layout from '../../components/layout/layout';

const Post = ({ post }) => {
  useEffect(() => {
    console.log(post);
  }, [])
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Post Page</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}

export default Post;

export async function getStaticPaths() {
    const postsRes = await fetchAPI("/posts", { fields: ["id"] })
    console.log('postsRes is ', postsRes);
  
    return {
      paths: postsRes.data.map((post) => ({
        params: {
          id: post.id.toString(),
        },
      })),
      fallback: false,
    }
  }
  
  export async function getStaticProps({ params }) {
    const postsRes = await fetchAPI("/posts", {
      filters: {
        id: params.id,
      },
      populate: "*",
    })
  
    return {
      props: { post: postsRes.data[0] },
      revalidate: 1,
    }
  }