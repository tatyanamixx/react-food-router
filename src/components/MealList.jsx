import { useNavigate } from 'react-router-dom';
import { MealItem } from './MealItem';
import { useLocation } from 'react-router-dom';

function MealList({ meals }) {
	const navigate = useNavigate();
	const {pathname} = useLocation();

	return (
		<>	{pathname.length>1?  (
			<button className='btn' onClick={() => navigate(-1)}>
				Go Back
			</button>): null}
			<div className='list'>
				{meals.map((meal) => (
					<MealItem key={meal.idMeal} {...meal} />
				))}
			</div>
		</>
	);
}

export { MealList };
