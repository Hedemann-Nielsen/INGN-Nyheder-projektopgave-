import { useGetQuery } from "../Components/Hooks/useGetQuery";
import { GetAllArticles } from "../Components/Queryes/GetAllArticles";

export const Home = () => {
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
	console.log(articles);
	return (
		<>
			<section className="w-5/6 m-auto h-full">
				{/* article 1 */}
				<article className=" bg-white w-full">
					<div className="pt-[30px] px-[34px]">
						<h3 className="text-[40px] text-text">
							{articles[0].article.hedline}
						</h3>
						<p className="text-[16px] text-text">
							{articles[0].article.teaserText}
						</p>
						<p className="text-[14px] text-red">
							{articles[0].article.date} {articles[0].article.writer}
						</p>
						<button>Læs mere</button>
					</div>
					<img
						src={articles[0].article.picture.url}
						alt={articles[0].article.picture.fileName}
						className="m-o p-0 object-cover"
					/>
				</article>
				<div className="grid grid-cols-2">
					<section className="h-full flex flex-col">
						{/* article 2 */}
						<article className=" bg-white">
							<h3 className="text-[40px] text-text">
								{articles[1].article.hedline}
							</h3>
							<p className="text-[16px] text-text">
								{articles[1].article.teaserText}
							</p>
							<p className="text-[14px] text-red">
								{articles[1].article.date} {articles[1].article.writer}
							</p>
							<button>Læs mere</button>
							<img
								src={articles[1].article.picture.url}
								alt={articles[1].article.picture.fileName}
							/>
						</article>
						{/* article 5 */}
						<article className=" bg-white">
							<h3 className="text-[40px] text-text">
								{articles[4].article.hedline}
							</h3>
							<p className="text-[16px] text-text">
								{articles[4].article.teaserText}
							</p>
							<p className="text-[14px] text-red">
								{articles[4].article.date} {articles[4].article.writer}
							</p>
							<button>Læs mere</button>
							<img
								src={articles[4].article.picture.url}
								alt={articles[4].article.picture.fileName}
							/>
						</article>
					</section>
					<section>
						{/* article 3 */}
						<article className=" bg-white">
							<h3 className="text-[40px] text-text">
								{articles[2].article.hedline}
							</h3>
							<p className="text-[16px] text-text">
								{articles[2].article.teaserText}
							</p>
							<p className="text-[14px] text-red">
								{articles[2].article.date} {articles[2].article.writer}
							</p>
							<button>Læs mere</button>
							<img
								src={articles[2].article.picture.url}
								alt={articles[2].article.picture.fileName}
							/>
						</article>

						{/* article 4 */}
						<article className="flex flex-col bg-white">
							<h3 className="text-[40px] text-text">
								{articles[3].article.hedline}
							</h3>
							<p className="text-[16px] text-text">
								{articles[3].article.teaserText}
							</p>
							<p className="text-[14px] text-red">
								{articles[3].article.date} {articles[3].article.writer}
							</p>
							<button>Læs mere</button>
							<img
								src={articles[3].article.picture.url}
								alt={articles[3].article.picture.fileName}
							/>
						</article>
					</section>
				</div>
			</section>
		</>
	);
};
