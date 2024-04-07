import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: "https://rickandmortyapi.com/graphql",
	documents: ['src/graphql/**/*.{ts,tsx}'],
	generates: {
		'./src/graphql/__generated__/': {
			preset: 'client',
			plugins: [],
			presetConfig: {
				gqlTagName: 'gql',
			}
		}
	},
	ignoreNoDocuments: true,
};

export default config;
