import { useState, useEffect } from 'react';
import { getSearchMeal } from '../api';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';
import { MealList } from '../components/MealList';

function Home() {
	const [meals, setMeals] = useState([]);
	
	useEffect(() => {
		getSearchMeal('').then((data) => {
			setMeals(data.meals);
		});
	}, []);

	const handleSearch = (str) => {
		getSearchMeal(str).then((data) => {
			setMeals(data.meals);
		});
	};

	return (
		<>
			<Search cb={handleSearch} />
			{!meals.length ? <Preloader /> : <MealList meals={meals} />}
		</>
	);
}

export { Home };
