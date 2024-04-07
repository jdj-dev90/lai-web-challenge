import { Flex, Skeleton, Stack } from "@chakra-ui/react";

export default function ListLoader() {
	return (
		<Flex direction='column' alignItems='center'>
			<Stack spacing={4} maxWidth='600px' width='100%'>
				<Skeleton height='120' my={4} />
				<Skeleton height='120' my={4} />
				<Skeleton height='120' my={4} />
				<Skeleton height='120' my={4} />
				<Skeleton height='120' my={4} />
				<Skeleton height='120' my={4} />
			</Stack>
		</Flex>
	)
}
