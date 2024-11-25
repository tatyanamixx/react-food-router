import { Link } from 'react-router-dom';

function Header() {
	return (
		<nav className='green darken-1 nav-extended'>
			<div className='container'>
				<div className='nav-wrapper'>
					<Link to='/' className='brand-logo center'>
						RECIPE
					</Link>
				</div>
				<div className='nav-content'>
					<ul className='tabs tabs-transparent'>
						<li className='tab'>
							<Link to={`/catalog`}>Catalog</Link>
						</li>
						<li className='tab'>
							<Link to={`/about`}>About</Link>
						</li>
						<li className='tab'>
							<Link to={`/contacts`}>Contacts</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export { Header };
