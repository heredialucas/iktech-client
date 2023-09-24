import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://iktech-server-m2mn-dev.fl0.io/',
    cache: new InMemoryCache(),
  });