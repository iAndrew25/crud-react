import StudentsTable from './students-table';
import ExamsTable from './exams-table';
import SetStudent from './set-student';
import {students, exams} from './../../backend';
import {getStudents, setStudent, removeStudent} from './../../service';

export default class Content extends React.Component {
	constructor(props) {
		super(props);

		this.getStudents = this.getStudents.bind(this);
		this.init = this.init.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleSetStudent = this.handleSetStudent.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState(Object.assign(this.state, nextProps));
	}

	init() {
		this.setState({
			currentPage: this.props.currentPage
		})

		this.getStudents();
	}

	componentWillMount() {
		this.init();		
	}

	getStudents() {
		//getStudents().then(students => this.setState({students}));
		this.setState({students});
	}

	handleRemove(id) {
		//removeStudent().then(_ => this.getStudents());
		console.log('Removing id:', id);
	}

	handleSetStudent({idStudent, grades}) {
		//setStudent(idStudent, grades).then(_ => this.getStudents());
		console.log('Set id:', id);
	}


	render() {
		let {students, currentPage} = this.state;

		return (
			<div className="container">
				{currentPage === 'STUDENTS' ? <div>
					<h3 className="text-center">Students</h3>
					<StudentsTable students={students} handleRemove={this.handleRemove} />
				</div> : null}
				{currentPage === 'EXAMS' ?<div>
					<h3 className="text-center">Exams</h3>
					<ExamsTable exams={exams} handleRemove={this.handleRemove} />
				</div> : null}
				{currentPage === 'SET_GRADES' ?<div>
					<h3 className="text-center">Set grades</h3>
					<SetStudent students={students} handleSetStudent={this.handleSetStudent} />
				</div> : null}
			</div>
		);		
	}
}