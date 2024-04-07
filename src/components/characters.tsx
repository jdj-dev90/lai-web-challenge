import { Flex } from "@chakra-ui/react";
import CharacterHeader from "./character-header";
import CharacterList from "./character-list";

export type Character = {
	name: string;
	image: string;
	status: string;
	species: string;
	location: string;
	origin: string;
};


export default function Characters() {
	return (
		<Flex p={5} direction="column" height='100vh' width='100%'>
			<CharacterHeader />
			<CharacterList />
		</Flex>
	);
};
