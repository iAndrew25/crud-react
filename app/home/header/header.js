import {Link} from 'react-router-dom';
import classNames from 'classnames';

export default function({currentPage, handlePageChange}) {
	return(
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<a className="navbar-brand" href="#">eSchool</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className={classNames("nav-item", {"active": currentPage === 'STUDENTS'})} onClick={() => handlePageChange('STUDENTS')}>
						<Link to="/logout">
							<a className="nav-link">Home</a>
						</Link>
					</li>
					<li className={classNames("nav-item", {"active": currentPage === 'FEATURES'})} onClick={() => handlePageChange('FEATURES')}>
						<Link to="/logout">
							<a className="nav-link">Features</a>
						</Link>
					</li>
					<li className={classNames("nav-item", {"active": currentPage === 'PRICING'})} onClick={() => handlePageChange('PRICING')}>
						<Link to="/logout">
							<a className="nav-link">Pricing</a>
						</Link>
					</li>
					<li className={classNames("nav-item", {"active": currentPage === 'ABOUT'})} onClick={() => handlePageChange('ABOUT')}>
						<Link to="/logout">
							<a className="nav-link">About</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}