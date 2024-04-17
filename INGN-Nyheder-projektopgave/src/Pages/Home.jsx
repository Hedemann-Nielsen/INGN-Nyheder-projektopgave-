import { DesktopView } from "../Components/Articles/DesktopView";
import { MobilView } from "../Components/Articles/MobilView";
import React, { useState, useEffect } from "react";

export const Home = () => {
	const [isMobileView, setIsMobileView] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobileView(window.innerWidth < 1024);
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<section className="w-[80%] m-auto h-full">
				{isMobileView && <MobilView />}

				{!isMobileView && <DesktopView />}
			</section>
		</>
	);
};
