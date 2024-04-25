import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  //uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});




export default function App({ Component, pageProps }: AppProps) {
  return(
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>  
  
) 
  ;
}
