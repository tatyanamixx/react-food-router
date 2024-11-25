import { useState, useEffect } from 'react';
import { getFilteredCategory} from '../api';
import { Preloader } from '../components/Preloader';
import { MealList } from '../components/MealList';
import { useParams } from 'react-router-dom';

function Category() {
	const { name } = useParams();
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		getFilteredCategory(name).then((data) => {
			setMeals(data.meals);
		});
	}, [name]);

	return <>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</>;
}
export { Category };
