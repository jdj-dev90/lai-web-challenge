import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Header from "@/components/header";
import Characters from "@/components/characters";

export default function Home() {
	return (
		<>
			<Head>
				<title>Web Team Challenge</title>
				<meta name="description" content="Code challenge for LAI Web Team" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main >
				<Flex height='100vh' overflow='hidden' direction='column' alignItems='center' p={6}>
					<Header />
					<Characters />
				</Flex>
			</main>
		</>
	);
}


