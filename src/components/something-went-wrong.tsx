import { Flex, Heading, Text } from "@chakra-ui/react";

export default function SomethingWentWrong({ message }: { message?: string }) {
	return (
		<Flex direction='column' height='100%' justifyContent='center' alignItems='center'>
			<Heading>Sorry, something went wrong!</Heading>
			{message ? <Text>Error: {message}</Text> : null}
		</Flex>
	)
}
