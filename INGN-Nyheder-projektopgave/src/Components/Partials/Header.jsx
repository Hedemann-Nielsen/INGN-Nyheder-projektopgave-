import { useGetQuery } from "../Hooks/useGetQuery";
import { GetAllHeaderContent } from "../Queryes/GetAllHeaderContent";
import { NavLink } from "react-router-dom";
import "../../Global.css";
import { FaUser } from "react-icons/fa";

export const Header = () => {
	const { data, isLoading, error } = useGetQuery(
		GetAllHeaderContent,
		"allHeaderContent"
	);

	if (isLoading) {
		return <span>Loading....</span>;
	}

	if (error) {
		return <span>{error.message}</span>;
	}

	const headers = data.headers[0];

	// console.log(headers);

	return (
		<>
			<div className="px-[100px] z-10 shadow-lg">
				<div className="mx-auto flex justify-between items-center h-[77px]">
					<h1 className="title font-normal text-[#C52525] text-[48px] ">
						{headers.title.title}
					</h1>
					<nav className="text-2xl ">
						<ul className="flex">
							<span className="px-3">|</span>

							{headers.navigations.map((navigation, index) => (
								<li key={index}>
									<NavLink to={navigation.navigationLink}>
										{navigation.navigationTitle}
										<span className="px-3">|</span>
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
					<FaUser className="text-red" />
				</div>
			</div>
		</>
	);
};
