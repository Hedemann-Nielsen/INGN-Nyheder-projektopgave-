import { gql } from "graphql-request";

export const getAllHeaders = gql`
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
