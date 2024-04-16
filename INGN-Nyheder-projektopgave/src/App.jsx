import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PageWrapper } from "./Components/Wrappers/PageWrappr";
import { SiteWrapper } from "./Components/Wrappers/SiteWrapper";
import { Header } from "./Components/Partials/Header";
import { Footer } from "./Components/Partials/Footer";
import { Home } from "./Pages/Home";
import { ArticleDetails } from "./Pages/ArticleDetails";

function App() {
	return (
		<>
			<Router>
				<PageWrapper>
					<Header />
					<SiteWrapper>
						<Routes>
							<Route index element={<Home />} />
							<Route path="/details/:id" element={<ArticleDetails />} />
							<Route path="*" element={<Home />} />
						</Routes>
					</SiteWrapper>
				</PageWrapper>
				<Footer />
			</Router>
		</>
	);
}

export default App;
