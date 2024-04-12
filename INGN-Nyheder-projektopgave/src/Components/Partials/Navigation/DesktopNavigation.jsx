import { useGetQuery } from "../../Hooks/useGetQuery";
import { GetAllHeaderContent } from "../../Queryes/GetAllHeaderContent";
import { NavLink } from "react-router-dom";

export const DesktopNavigation = () => {
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

	return (
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
	);
};
