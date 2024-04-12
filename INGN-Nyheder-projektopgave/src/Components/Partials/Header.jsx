import { useState, useEffect } from "react";
import { useGetQuery } from "../Hooks/useGetQuery";
import { GetAllHeaderContent } from "../Queryes/GetAllHeaderContent";
import "../../Global.css";
import { FaUser } from "react-icons/fa";

import { DesktopNavigation } from "./Navigation/DesktopNavigation";
import { BurgerMenu } from "./Navigation/BurgerMenu";

export const Header = () => {
	const { data, isLoading, error } = useGetQuery(
		GetAllHeaderContent,
		"allHeaderContent"
	);

	const [isMobileView, setIsMobileView] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobileView(window.innerWidth < 768);
		};

		handleResize(); // Check initial size
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	if (isLoading) {
		return <span>Loading....</span>;
	}

	if (error) {
		return <span>{error.message}</span>;
	}

	const headers = data.headers[0];

	return (
		<>
			<div className="px-[100px] z-10 shadow-lg">
				<div className="mx-auto flex  md:justify-between sm:justify-between items-center h-[77px]">
					<h1 className="title font-normal text-[#C52525] text-[48px] ">
						{headers.title.title}
					</h1>
					{!isMobileView && (
						<>
							<DesktopNavigation />
							<FaUser className="text-red" />
						</>
					)}

					{isMobileView && (
						<div className="flex items-center justify-center h-[77px] ">
							<FaUser className="text-red h-full mr-[18.4px] " />
							<BurgerMenu />
						</div>
					)}
				</div>
			</div>
		</>
	);
};
