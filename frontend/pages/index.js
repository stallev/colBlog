import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { fetchAPI } from '../lib/api';
import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import { getHomepage } from '../graphql/queries';
import graphqlGetData from '../lib/graphqlapi';

const Homepage = ({ homepage }) => {
  useEffect(() => {
    console.log(homepage);
  }, [])
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Container>
        <h1>Homepage</h1>
      </Container>
      <h1>Homepage</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}

export async function getStaticProps() {
  // const homepage = await fetchAPI("/homepage");
  const homepage = await graphqlGetData(getHomepage);

  return {
    props: { 
      homepage
    },
    revalidate: 1,
  }
}

export default Homepage;