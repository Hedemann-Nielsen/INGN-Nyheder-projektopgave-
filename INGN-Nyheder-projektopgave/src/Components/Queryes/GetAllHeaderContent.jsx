import { gql } from "graphql-request";

export const GetAllHeaderContent = gql`
	query Header {
		headers {
			title {
				title
			}
			navigations {
				navigationTitle
				navigationLink
			}
		}
	}
`;
