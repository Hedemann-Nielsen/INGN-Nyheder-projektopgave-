import { useParams } from "react-router-dom";
import { GetArticleByID } from "../Components/Queryes/GetArticleByID";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";

export const ArticleDetails = () => {
	const { id } = useParams();

	let baseUrl = `https://api-eu-west-2.hygraph.com/v2/cluub4q2x0dq408wavuuyj6uj/master`;

	const { data, error, isLoading } = useQuery({
		queryKey: ["articleDetails", id],
		queryFn: async () =>
			request(baseUrl, GetArticleByID, {
				articleID: id,
			}),
	});

	if (isLoading) {
		return <span>Loading....</span>;
	}

	if (error) {
		return <span>{error.message}</span>;
	}

	const DetailArticle = data.articles[0].article;
	console.log(data);
	return (
		<>
			<section className="w-[80%] m-auto my-6 h-full">
				<article className=" bg-white pb-20 w-full">
					<img
						src={DetailArticle.picture.url}
						alt={DetailArticle.picture.fileName}
						className="my-3 object-cover"
					/>
					<div className="px-7 pt-9">
						<h3 className="text-[40px] text-text">{DetailArticle.hedline}</h3>
						<p className="text-[14px] font-bold py-4 text-red">
							{DetailArticle.date} - {DetailArticle.writer}
						</p>
						<div className="w-[700px] m-auto text-[16px]  text-text">
							<ReactMarkdown remarkPlugins={[remarkGfm]}>
								{DetailArticle.content}
							</ReactMarkdown>
						</div>
					</div>
				</article>
			</section>
		</>
	);
};
