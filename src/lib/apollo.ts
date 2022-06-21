import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oci8bu1s4l01xmavxo8y3i/master',
    cache: new InMemoryCache()
})