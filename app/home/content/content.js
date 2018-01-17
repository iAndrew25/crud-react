import StudentsTable from './students-table';
import ExamsTable from './exams-table';
import SetStudent from './set-student';
import AddExam from './add-exam';
import {students} from './../../backend';
import {getStudents, getExams, setStudent, addExam, removeExam, removeStudent} from './../../service';

export default class Content extends React.Component {
	constructor(props) {
		super(props);

		this.getStudents = this.getStudents.bind(this);
		this.init = this.init.bind(this);
		this.handleAddExam = this.handleAddExam.bind(this);
		this.setStudents = this.setStudents.bind(this);
		this.handleStudentRemove = this.handleStudentRemove.bind(this);
		this.handleExamRemove = this.handleExamRemove.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState(Object.assign(this.state, nextProps));
	}

	init() {
		this.setState({
			currentPage: this.props.currentPage
		})

		this.getStudents();
		this.getExams();
	}

	componentWillMount() {
		this.init();		
	}

	getExams() {
		getExams().then(exams => this.setState({exams, currentPage: 'EXAMS'}));
	}

	handleExamRemove(id) {
		removeExam(id).then(_ => this.getExams());
	}

	handleAddExam(exam) {
		addExam(exam).then(_ => this.getExams());
	}

	getStudents() {
		getStudents().then(students => this.setState({students, currentPage: 'STUDENTS'}));
	}

	setStudents(student) {
		setStudent(student).then(_ => this.getStudents());

	}

	handleStudentRemove(id) {
		removeStudent(id).then(_ => this.getStudents());
	}

	render() {
		let {students = [], exams = [], currentPage} = this.state;

		return (
			<div className="container">
				{currentPage === 'STUDENTS' ? <div>
					<h3 className="text-center">Students</h3>
					<StudentsTable students={students} handleRemove={this.handleStudentRemove} />
				</div> : null}
				{currentPage === 'EXAMS' ? <div>
					<h3 className="text-center">Exams</h3>
					<ExamsTable exams={exams} handleRemove={this.handleExamRemove} />
				</div> : null}
				{currentPage === 'ADD_EXAM' ? <div>
					<h3 className="text-center">Add exam</h3>
					<AddExam exams={exams} handleAddExam={this.handleAddExam} />
				</div> : null}
				{currentPage === 'UPDATE_STUDENT' ? <div>
					<h3 className="text-center">Update student</h3>
					<SetStudent students={students} handleSetStudent={this.setStudents} />
				</div> : null}
			</div>
		);		
	}
}