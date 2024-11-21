import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contacts";
import { NotFound } from "./pages/NotFound";
import { Category} from "./pages/Category";
import { Recipe } from "./pages/Recipe";

function App() {
	return (
		<>
			<Router>
				<div className="App">
					<Header />
					<main className="container content">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/category/:name" element={<Category />} />
							<Route path="/recipe/:id" element={<Recipe />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</Router>
		</>
	);
}

export default App;
