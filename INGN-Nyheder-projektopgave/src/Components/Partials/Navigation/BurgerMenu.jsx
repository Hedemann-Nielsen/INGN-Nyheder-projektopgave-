import { useGetQuery } from "../../Hooks/useGetQuery";
import { GetAllHeaderContent } from "../../Queryes/GetAllHeaderContent";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

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
		<div>
			<button
				className="text-2xl h-[77px]"
				onClick={toggleMenu}
				aria-label="Toggle Menu">
				<GiHamburgerMenu />
			</button>
			{isOpen && (
				<div className="absolute top-[75px] right-0 w-full bg-white shadow-lg">
					<ul className="flex flex-col items-center">
						{headers.navigations.map((navigation, index) => (
							<li key={index}>
								<NavLink
									to={navigation.navigationLink}
									className="block w-screen text-center px-4 py-2 hover:bg-gray-100"
									onClick={toggleMenu}>
									{navigation.navigationTitle}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
