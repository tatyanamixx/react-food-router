import { useNavigate } from 'react-router-dom';
import { CategoryItem } from './CategoryItem';

function CategoryList({ catalog = [] }) {
	const navigate = useNavigate();

	return (
		<>
			<button className='btn' onClick={() => navigate(-1)}>
				Go Back
			</button>
			<div className='list'>
				{catalog.map((el) => (
					<CategoryItem key={el.idCategory} {...el} />
				))}
			</div>
		</>
	);
}

export { CategoryList };
