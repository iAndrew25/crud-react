import StudentsTable from './table';
import {students} from './../../backend';
import {getStudents, removeStudent} from './../../service';

export default class Content extends React.Component {
	constructor(props) {
		super(props);

		this.getStudents = this.getStudents.bind(this);

		this.handleRemove = this.handleRemove.bind(this);
	}

	componentWillMount() {
		this.getStudents();		
		console.log(students);
	}

	getStudents() {
		//getStudents().then(students => this.setState({students}));
		this.setState({students});
	}

	handleRemove(id) {
		//removeStudent().then(_ => this.getStudents());
		console.log('Removing id:', id);
	}

	render() {
		let {students} = this.state;

		return (
			<div className="container">
				<h3 className="text-center">Students</h3>
				<StudentsTable students={students} handleRemove={this.handleRemove}/>
			</div>
		);		
	}
}