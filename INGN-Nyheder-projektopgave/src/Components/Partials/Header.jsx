import { useGetQuery } from "../Hooks/useGetQuery";
import { getAllHeaders } from "../Queryes/GetAllHeader";
import { NavLink } from "react-router-dom";
import "../../Global.css";

export const Header = () => {
	const { data, isLoading, error } = useGetQuery(getAllHeaders, "allHeaders");

	if (isLoading) {
		return <span>Loading....</span>;
	}

	if (error) {
		return <span>{error.message}</span>;
	}

	const headers = data.headers[0];

	console.log(headers);

	return (
		<>
			<div className="px-[100px] border-b-1 shadow-lg">
				<div className="mx-auto flex justify-between items-center border border-black h-[77px]">
					<h1 className="title font-normal text-[#C52525] text-[48px] ">
						{headers.title.title}
					</h1>
					<nav>
						<ul className="flex space-x-4">
							{headers.navigations.map((navigation, index) => (
								<li key={index}>
									<NavLink to={navigation.navigationLink}>
										{navigation.navigationTitle}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
};
