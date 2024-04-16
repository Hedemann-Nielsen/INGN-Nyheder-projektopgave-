import { gql } from "graphql-request";

export const GetAllArticles = gql`
	query Articles {
		articles {
			article {
				... on ArticleTeaser {
					id
					categorie
					content
					date
					hedline
					teaserText
					writer
					picture {
						url
						fileName
					}
				}
			}
		}
	}
`;
