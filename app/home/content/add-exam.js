export default class SetStudent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		let {exams} = this.props;
		this.setState({exams});
	}

	componentWillReceiveProps(nextProps) {
		this.setState(Object.assign(this.state, nextProps));
	}

	handleChange(key, value) {
		this.setState({
			[key]: value
		})
	}

	handleSubmit() {
		let {name, subject, date} = this.state;
		this.props.handleAddExam({name, subject, date})
	}

	render() {
		let {exams} = this.state;

		return(
			<div>
				<div>
					<label>Name:</label><br />
					<input type="text" value={this.state.name} onChange={e => this.handleChange('name', e.target.value)}/>
				</div><br />
				<div>
					<label>Subject:</label><br />
					<input type="text" value={this.state.subject} onChange={e => this.handleChange('subject', e.target.value)}/>
				</div><br />
				<div>		
					<label>Date:</label><br />
					<input type="text" value={this.state.date} onChange={e => this.handleChange('date', e.target.value)}/>
				</div><br />
				<div>
					<button onClick={this.handleSubmit}>Add exam</button>
				</div>
			</div>
		);
	}
};