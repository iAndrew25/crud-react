export default class SetStudent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.handleChange = this.handleChange.bind(this);
		this.handleGrades = this.handleGrades.bind(this);
	}

	componentDidMount() {
		let {students} = this.props;
		this.setState({students});
	}

	componentWillReceiveProps(nextProps) {
		this.setState(Object.assign(this.state, nextProps));
	}

	handleChange(key, value) {
		this.setState({
			[key]: value
		})
	}

	handleGrades() {
		let {math, prog, db, linux, id, students} = this.state;
		let name = students.find(stud => stud.id == id).name;
		let payload = {
			math,
			prog,
			db,
			linux, 
			id,
			name
		}

		this.props.handleSetStudent(payload);
	}

	render() {
		let {students} = this.state;

		return(
			<div>
				<div>
					<label>Student name:</label><br />
					<select onChange={(e) => this.handleChange('id', e.target.value)}>
						<option value="">Select a student...</option>
						{this.props.students.map(({id, name}) => <option value={id}>{name}</option>)}
					</select>
				</div><br />
				<div>
					<label>Math:</label><br />
					<input type="text" value={this.state.math} onChange={(e) => this.handleChange('math', e.target.value)}/>
				</div><br />
				<div>
					<label>Prog:</label><br />
					<input type="text" value={this.state.prog} onChange={(e) => this.handleChange('prog', e.target.value)}/>
				</div><br />
				<div>		
					<label>DB:</label><br />
					<input type="text" value={this.state.db} onChange={(e) => this.handleChange('db', e.target.value)}/>
				</div><br />
				<div>		
					<label>Linux:</label><br />
					<input type="text" value={this.state.linux} onChange={(e) => this.handleChange('linux', e.target.value)}/>
				</div><br />
				<div>
					<button onClick={this.handleGrades}>Set Grades</button>
				</div>
			</div>
		);
	}
};