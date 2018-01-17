export default function({exams, handleRemove}) {
	return(
		<table className="table table-hover">
			<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Name</th>
					<th scope="col">Subject</th>
					<th scope="col">Date</th>
					<th scope="col" colSpan="2">Actions</th>
				</tr>
			</thead>
			<tbody>
				{exams.map(({examId, name, subject, date}) => (
					<tr key={examId}>
						<th>{examId}</th>
						<td>{name}</td>
						<td>{subject}</td>
						<td>{date}</td>
						<td>
							<button type="button" className="btn btn-danger btn-sm" onClick={() => handleRemove(examId)}>Remove</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};