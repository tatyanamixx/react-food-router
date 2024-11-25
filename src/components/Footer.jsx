function Footer() {
	return (
		<footer className='page-footer green lighten-4'>
			<div className='footer-copyright'>
				<div className='container'>
					© {new Date().getFullYear()} Copyright
					<a
						className='grey-text text-lighten-4 right'
						href='https://github.com/tatyanamixx/react-food-router.git'
						rel='noreferrer'
						target='_blank'>
						Repo
					</a>
				</div>
			</div>
		</footer>
	);
}

export { Footer };
