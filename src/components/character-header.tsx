import usePageNumber from "@/hooks/use-page-number";
import { Text, Box, Button, Flex, Heading } from "@chakra-ui/react";

export default function CharacterHeader() {
	const { pageNumber, handlePageChange } = usePageNumber()

	return (
		<Box mt={10}>
			<Heading mb={4}>Characters</Heading>
			<Flex justify="space-around" align="center" mb={4}>
				<Button onClick={() => handlePageChange(pageNumber - 1)} isDisabled={pageNumber <= 1}>
					Previous
				</Button>
				<Text>Page: {pageNumber}</Text>
				<Button onClick={() => handlePageChange(pageNumber + 1)}>
					Next
				</Button>
			</Flex>
		</Box>
	)
}
