import { useUser } from "@/contexts/user-context";
import { Flex, Text, Box, Stack } from "@chakra-ui/react";
import ThemeToggleButton from "./theme-toggle-button";
import UserDetailsModal from "./user-details-modal";

export default function Header() {
	const { user } = useUser();

	return (
		<Box as="header" width="100%" top={0} zIndex="banner" boxShadow="sm">
			<Flex
				as="nav"
				align="center"
				justify="space-between"
				wrap="wrap"
				padding={4}
			>
				<Flex justifyContent="flex-start" mr={5}>
					<Stack>
						<Text fontSize="xl" fontWeight="bold">
							{user.username}
						</Text>
						<Text>{user.jobTitle}</Text>
					</Stack>
				</Flex>

				<Stack direction='row'>
					<ThemeToggleButton />
					<UserDetailsModal />
				</Stack>
			</Flex>
		</Box>
	);
}
