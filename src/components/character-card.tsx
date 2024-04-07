import { Box, Flex, Text, Badge, Stack, Heading } from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon, WarningTwoIcon } from '@chakra-ui/icons'
import Image from "next/image";
import { Character } from "./characters";

function getStatusProps(status: string) {
	const statusColor = status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'yellow';
	const StatusIcon = status === 'Alive' ? CheckCircleIcon : status === 'Dead' ? CloseIcon : WarningTwoIcon
	return { statusColor, StatusIcon }
}

export default function CharacterCard({ character }: { character: Character }) {
	const { name, image, status, species, location, origin } = character;
	const { statusColor, StatusIcon } = getStatusProps(status)

	return (
		<Box py={4}>
			<Flex justifyContent='center'>
				<Image
					src={image}
					alt={`Image of ${name}`}
					width={300}
					height={300}
				/>
			</Flex>
			<Stack mt='6' spacing='3'>
				<Text fontSize='x-large' fontWeight='bold'>{name}</Text>
				<Flex justifyContent='space-between'>
					<Text fontWeight='bold'>Status:</Text>
					<Badge colorScheme={statusColor} px={2} py={1} borderRadius="md" >
						<Box as={StatusIcon} mr={2} />
						{status}
					</Badge>
				</Flex>
				<Flex justifyContent='space-between'>
					<Text fontWeight='bold'>Species:</Text>
					<Text>{species}</Text>
				</Flex>

				<Flex justifyContent='space-between'>
					<Text fontWeight='bold'>Location:</Text>
					<Text>{location}</Text>
				</Flex>

				<Flex justifyContent='space-between'>
					<Text fontWeight='bold'>Origin:</Text>
					<Text>{origin}</Text>
				</Flex>
			</Stack>
		</Box>
	);
}
