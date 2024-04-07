import { gql } from '../__generated__/gql';

export const GET_CHARACTERS = gql(`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
      }
      results {
				id
        name
				status
				species
				image
				origin {
					name
				}
				location {
					name
				}
      }
    }
  }
`);

