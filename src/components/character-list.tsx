import usePageNumber from "@/hooks/use-page-number";
import { Flex, VStack } from "@chakra-ui/react";
import CharacterItem from "./character-item";
import { GET_CHARACTERS } from "@/graphql/queries/get-characters";
import { useQuery, } from '@apollo/client';
import ListLoader from "./list-loader";
import SomethingWentWrong from "./something-went-wrong";
import EndOfList from "./end-of-list";


export default function CharacterList() {
	const { pageNumber } = usePageNumber()
	const { loading, error, data } = useQuery(GET_CHARACTERS, {
		variables: { page: pageNumber },
	});

	if (loading) return <ListLoader />;
	if (error) return <SomethingWentWrong message={error.message} />
	if (data?.characters?.results?.length === 0) return <EndOfList />;

	return (
		<Flex flex="1" direction='column' alignItems='center' overflowY="scroll" mb={40}>
			<VStack spacing={4} maxWidth='600px'>
				{data?.characters?.results?.map(character => {
					if (!character) return null;
					return (
						<CharacterItem
							key={character.id}
							name={character.name ?? ''}
							image={character.image ?? ''}
							status={character.status ?? ''}
							species={character.species ?? ''}
							location={character.location?.name ?? ''}
							origin={character.origin?.name ?? ''}
						/>
					);
				})}
			</VStack>
		</Flex>
	)
}
