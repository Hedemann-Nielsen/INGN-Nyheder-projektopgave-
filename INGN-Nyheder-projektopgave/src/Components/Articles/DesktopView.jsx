import { useGetQuery } from "../Hooks/useGetQuery";
import { GetAllArticles } from "../Queryes/GetAllArticles";
import { Link } from "react-router-dom";

export const DesktopView = () => {
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
			{/* article 1 - Politiet finder gammel mand i deres egen bil*/}
			<article className=" bg-white w-full mx-3">
				<div className="pt-[30px] px-[34px] m-3 p-2">
					<h3 className="text-[40px] text-text">
						{articles[0].article.hedline}
					</h3>
					<p className="text-[16px] text-text">
						{articles[0].article.teaserText}
					</p>
					<p className="text-[14px] text-red">
						{articles[0].article.date} {articles[0].article.writer}
					</p>
					<Link
						to={`/articledetails/${articles[0].article.id}`}
						className="py-3 hover:text-gray-300">
						Læs mere
					</Link>
				</div>
				<img
					src={articles[0].article.picture.url}
					alt={articles[0].article.picture.fileName}
					className="my-3 p-0 object-cover"
				/>
			</article>
			<div className="grid grid-cols-2">
				<section className="h-full flex flex-col">
					{/* article 2 - Robot er lidt for “Cute” */}
					<article className=" bg-white m-3">
						<div className="px-[34px] m-3 p-2">
							<h3 className="text-[40px] text-text">
								{articles[1].article.hedline}
							</h3>
							<p className="text-[16px] text-text">
								{articles[1].article.teaserText}
							</p>
							<p className="text-[14px] text-red">
								{articles[1].article.date} {articles[1].article.writer}
							</p>
							<Link
								to={`/articledetails/${articles[1].article.id}`}
								className="py-3 hover:text-gray-300">
								Læs mere
							</Link>
						</div>
						<img
							src={articles[1].article.picture.url}
							alt={articles[1].article.picture.fileName}
							className="my-3 p-0 object-cover"
						/>
					</article>
					{/* article 5 - Fransk grafittimaler fanget!*/}
					<article className="bg-white mx-3">
						<div className="px-[34px] m-3 p-2">
							<h3 className="text-[40px] text-text">
								{articles[4].article.hedline}
							</h3>
							<p className="text-[16px] text-text">
								{articles[4].article.teaserText}
							</p>
							<p className="text-[14px] text-red">
								{articles[4].article.date} {articles[4].article.writer}
							</p>
							<Link
								to={`/articledetails/${articles[4].article.id}`}
								className="py-3 hover:text-gray-300">
								Læs mere
							</Link>
						</div>
						<img
							src={articles[4].article.picture.url}
							alt={articles[4].article.picture.fileName}
						/>
					</article>
				</section>
				<section>
					{/* article 3 - Ny blomst opdaget i Kolding */}
					<article className=" bg-white m-3">
						<div className="px-[34px] m-3 p-2">
							<h3 className="text-[40px] text-text">
								{articles[2].article.hedline}
							</h3>
							<p className="text-[16px] text-text">
								{articles[2].article.teaserText}
							</p>
							<p className="text-[14px] text-red">
								{articles[2].article.date} {articles[2].article.writer}
							</p>
							<Link
								to={`/articledetails/${articles[2].article.id}`}
								className="py-3 hover:text-gray-300">
								Læs mere
							</Link>
						</div>
						<img
							src={articles[2].article.picture.url}
							alt={articles[2].article.picture.fileName}
						/>
					</article>

					{/* article 4 - Rumsonde ligner astronaut*/}
					<article className="flex flex-col mx-3 bg-white">
						<div className="px-[34px] m-3 p-2">
							<h3 className="text-[40px] text-text">
								{articles[3].article.hedline}
							</h3>
							<p className="text-[16px] text-text">
								{articles[3].article.teaserText}
							</p>
							<p className="text-[14px] text-red">
								{articles[3].article.date} {articles[3].article.writer}
							</p>
							<Link
								to={`/articledetails/${articles[3].article.id}`}
								className="py-3 hover:text-gray-300">
								Læs mere
							</Link>
						</div>
						<img
							src={articles[3].article.picture.url}
							alt={articles[3].article.picture.fileName}
						/>
					</article>
				</section>
			</div>
			<section>
				{/* article 6 - "Kylling ER sundt" siger ekspert*/}
				<article className="flex m-3 bg-white">
					<img
						src={articles[5].article.picture.url}
						alt={articles[5].article.picture.fileName}
					/>
					<div className="px-[34px] m-3 p-2">
						<h3 className="text-[40px] text-text">
							{articles[5].article.hedline}
						</h3>
						<p className="text-[16px] text-text">
							{articles[5].article.teaserText}
						</p>
						<p className="text-[14px] text-red">
							{articles[5].article.date} {articles[5].article.writer}
						</p>
						<Link
							to={`/articledetails/${articles[5].article.id}`}
							className="py-3 hover:text-gray-300">
							Læs mere
						</Link>
					</div>
				</article>
			</section>
			<section>
				{/* article 7 - "Kylling ER sundt" siger ekspert*/}
				<article className="flex m-3 bg-white">
					<div className="px-[34px] m-3 p-2">
						<h3 className="text-[40px] text-text">
							{articles[6].article.hedline}
						</h3>
						<p className="text-[16px] text-text">
							{articles[6].article.teaserText}
						</p>
						<p className="text-[14px] text-red">
							{articles[6].article.date} {articles[6].article.writer}
						</p>
						<Link
							to={`/articledetails/${articles[6].article.id}`}
							className="py-3 hover:text-gray-300">
							Læs mere
						</Link>
					</div>
					<img
						src={articles[6].article.picture.url}
						alt={articles[6].article.picture.fileName}
					/>
				</article>
			</section>
			<section className="grid grid-cols-2 bg-white w-full m-3">
				{/* article 8 - Dansker vinder Hackathon*/}
				<article className="m-3 bg-white">
					<div className="px-[34px] m-3 p-2">
						<h3 className="text-[40px] text-text">
							{articles[7].article.hedline}
						</h3>
						<p className="text-[16px] text-text">
							{articles[7].article.teaserText}
						</p>
						<p className="text-[14px] text-red">
							{articles[7].article.date} {articles[7].article.writer}
						</p>
						<Link
							to={`/articledetails/${articles[7].article.id}`}
							className="py-3 hover:text-gray-300">
							Læs mere
						</Link>
					</div>
					<img
						src={articles[7].article.picture.url}
						alt={articles[7].article.picture.fileName}
					/>
				</article>
				{/* article 9 - Nyt nyt super-sygehus*/}
				<article className="m-3 bg-white">
					<div className="px-[34px] m-3 p-2">
						<h3 className="text-[40px] text-text">
							{articles[8].article.hedline}
						</h3>
						<p className="text-[16px] text-text">
							{articles[8].article.teaserText}
						</p>
						<p className="text-[14px] text-red">
							{articles[8].article.date} {articles[8].article.writer}
						</p>
						<Link
							to={`/articledetails/${articles[8].article.id}`}
							className="py-3 hover:text-gray-300">
							Læs mere
						</Link>
					</div>
					<img
						src={articles[8].article.picture.url}
						alt={articles[8].article.picture.fileName}
					/>
				</article>
			</section>
		</>
	);
};
