import { Flex, Text, Box } from '@chakra-ui/react';
import Image from 'next/image';
import { Character } from './characters';
import CharacterModal from './character-modal';

export default function CharacterItem(character: Character) {
	const { name, image } = character;

	return (
		<Flex
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			my={4}
			position="relative"
			flex='1'
			width='100%'
		>
			<Image
				src={image}
				alt={`Image of ${name}`}
				width={120}
				height={120}
				priority
				quality={75}
			/>

			<Box flex="1" p={4} maxW={400} >
				<Text fontWeight="bold" fontSize="x-large" mt={1}>{name}</Text>
			</Box>

			<Flex p={4} direction="column" justifyContent="flex-end" >
				<CharacterModal character={character} />
			</Flex>

		</Flex>
	);
}

