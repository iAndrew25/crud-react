export default function({exams, handleRemove}) {
	return(
		<table className="table table-hover">
			<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Name</th>
					<th scope="col">Subject</th>
					<th scope="col">Date</th>
					<th scope="col" colspan="2">Actions</th>
				</tr>
			</thead>
			<tbody>
				{exams.map(({id, name, subject, exam_date}) => (
					<tr key={id}>
						<th>{id}</th>
						<td>{name}</td>
						<td>{subject}</td>
						<td>{exam_date}</td>
						<td>
							<button type="button" className="btn btn-info btn-sm" style={{marginRight: "5px"}} onClick={() => handleRemove(id)}>Edit</button>
							<button type="button" className="btn btn-danger btn-sm" onClick={() => handleRemove(id)}>Remove</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};