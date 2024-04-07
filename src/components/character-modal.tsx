import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from '@chakra-ui/react'
import CharacterCard from './character-card';
import { Character } from './characters';

export default function CharacterModal({ character }: { character: Character }) {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Button colorScheme="blue" size="sm" onClick={onOpen}>
				Info
			</Button>

			<Modal isOpen={isOpen} onClose={onClose} size="sm">
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<CharacterCard character={character} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}
