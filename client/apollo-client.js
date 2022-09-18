import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/chirag0002/event-x3",
  cache: new InMemoryCache(),
});

export default client;