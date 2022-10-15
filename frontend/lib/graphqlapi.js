import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

export const graphqlGetData = async (query) => {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`${query}`,
  });

  return data;
}

export default graphqlGetData;