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
						<a className="nav-link">Students</a>
					</li>
					<li className={classNames("nav-item", {"active": currentPage === 'EXAMS'})} onClick={() => handlePageChange('EXAMS')}>
						<a className="nav-link">Exams</a>
					</li>
					<li className={classNames("nav-item", {"active": currentPage === 'ADD_EXAM'})} onClick={() => handlePageChange('ADD_EXAM')}>
						<a className="nav-link">Add exam</a>
					</li>
					<li className={classNames("nav-item", {"active": currentPage === 'UPDATE_STUDENT'})} onClick={() => handlePageChange('UPDATE_STUDENT')}>
						<a className="nav-link">Update student</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}