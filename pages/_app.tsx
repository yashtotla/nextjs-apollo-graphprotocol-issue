import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphApolloLink } from "@graphprotocol/client-apollo";
import * as GraphClient from "@/.graphclient";

const subGraphClient = new ApolloClient({
  link: new GraphApolloLink(GraphClient),
  cache: new InMemoryCache()
});

export default function App({ Component, pageProps }: AppProps) {
  return (<ApolloProvider client={subGraphClient}><Component {...pageProps} /></ApolloProvider>)
}
