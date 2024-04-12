import { gql } from "graphql-request";

export const GetAllFooterContent = gql`
	query Footers {
		footers {
			address {
				companyName
				streetAndNumber
				zipCodeAndCity
			}
			links {
				linkName
				link
			}
			politics {
				linkName
				link
			}
			contacts {
				contactType
			}
		}
	}
`;
