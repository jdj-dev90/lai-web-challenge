import { useUser } from '@/contexts/user-context';
import { EditIcon } from '@chakra-ui/icons';
import {
	Button,
	Input,
	Stack,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Tooltip,
	IconButton,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function UserDetailsModal() {
	const { user, saveUser } = useUser();
	const [username, setUsername] = useState(user.username);
	const [jobTitle, setJobTitle] = useState(user.jobTitle);
	const { isOpen: isManuallyOpen, onOpen, onClose } = useDisclosure();

	const shouldOpenAutomatically = !user.username || !user.jobTitle;
	const isOpen = shouldOpenAutomatically || isManuallyOpen;

	useEffect(() => {
		setUsername(user.username);
		setJobTitle(user.jobTitle);
	}, [user]);

	const handleSubmit = () => {
		saveUser(username, jobTitle);
		onClose();
	};

	return (
		<>
			<Tooltip label={'Edit Profile'} aria-label={'Edit Profile'}>
				<IconButton
					aria-label={'Edit Profile'}
					icon={<EditIcon />}
					onClick={onOpen}
					isRound={true}
					size="lg"
					fontSize="lg"
				/>
			</Tooltip>

			<Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={!shouldOpenAutomatically}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>User Details</ModalHeader>
					<ModalCloseButton isDisabled={shouldOpenAutomatically} />
					<ModalBody>
						<Text fontSize='lg'>Please enter your details</Text>
						<Stack spacing={3}>
							<Input
								placeholder='Username'
								size='lg'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
							<Input
								placeholder='Job Title'
								size='lg'
								value={jobTitle}
								onChange={(e) => setJobTitle(e.target.value)}
							/>
						</Stack>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3} onClick={onClose} isDisabled={shouldOpenAutomatically}>
							Close
						</Button>
						<Button colorScheme='green' onClick={handleSubmit}>
							Submit
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
