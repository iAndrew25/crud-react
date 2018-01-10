import {Link} from 'react-router-dom';
import Header from './header/header';
import Content from './content/content';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 'STUDENTS'
		}

		this.handlePageChange = this.handlePageChange.bind(this);
	}

	handlePageChange(currentPage) {
		console.log(currentPage);
		this.setState({currentPage});
	}

	render() {
		let {currentPage} = this.state;

		return(
			<div>
				<Header currentPage={currentPage} handlePageChange={this.handlePageChange} />
				<Content />
			</div>
		)
	}
}