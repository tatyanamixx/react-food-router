import {Category} from './CategoryItem'

export default function CategoryList({ catalog = [] }) {
	return <div className="list">
        {catalog.map(el => (<Category key={el.id} {...el} />))}
    </div>;
}
