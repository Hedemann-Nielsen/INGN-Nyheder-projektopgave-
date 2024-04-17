import { useGetQuery } from "..//Hooks/useGetQuery";
import { GetAllArticles } from "../Queryes/GetAllArticles";
import { Link } from "react-router-dom";

export const MobilView = () => {
	const { data, isLoading, error } = useGetQuery(
		GetAllArticles,
		"GetAllArticles"
	);

	if (isLoading) {
		return <span>Loading....</span>;
	}

	if (error) {
		return <span>{error.message}</span>;
	}

	const articles = data.articles;

	return (
		<>
			{articles.map((article, index) => (
				<div key={index}>
					<article className=" bg-white w-full">
						<h3 className="text-[20px] text-text">{article.article.hedline}</h3>
						<p className="text-[14px] text-red">
							{article.article.date} - {article.article.writer}
						</p>
						<p className="text-[14px] text-text">
							{article.article.teaserText}
						</p>
						<Link
							to={`/articledetails/${article.article.id}`}
							className="py-3 hover:text-gray-300">
							Læs mere
						</Link>
						<img
							src={article.article.picture.url}
							alt={article.article.picture.fileName}
							className="my-3 object-cover"
						/>
					</article>
				</div>
			))}
		</>
	);
};
