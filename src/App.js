import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';
import { Catalog } from './pages/Catalog';


function App() {
	return (
		<>
			<Router basename='/react-food-router'>
				<div className='App'>
					<Header />
					<main className='container content'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route path='/contacts' element={<Contacts />} />
							<Route
								path='/category/:name'
								element={<Category />}
							/>
							<Route path='/recipe/:id' element={<Recipe />} />
							<Route path='/catalog' element={<Catalog />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</Router>
		</>
	);
}

export default App;
