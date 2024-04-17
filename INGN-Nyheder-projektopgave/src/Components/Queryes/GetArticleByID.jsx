import { gql } from "graphql-request";

export const GetArticleByID = gql`
	query getArticleById($articleID: ID!) {
		articles(where: { article: { ArticleTeaser: { id: $articleID } } }) {
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
