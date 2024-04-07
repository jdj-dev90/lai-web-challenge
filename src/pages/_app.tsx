import { UserProvider } from "@/contexts/user-context";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql',
	cache: new InMemoryCache()
});

export default function App({ Component, pageProps }: AppProps) {

	return (
		<ApolloProvider client={client} >
			<ChakraProvider >
				<ColorModeScript initialColorMode={'dark'} />
				<UserProvider>
					<Component {...pageProps} />
				</UserProvider>
			</ChakraProvider>
		</ApolloProvider >
	)
}
