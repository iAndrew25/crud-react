export default function({students, handleRemove}) {
	return(
		<table className="table table-hover">
			<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Name</th>
					<th scope="col">Math</th>
					<th scope="col">Prog</th>
					<th scope="col">DB</th>
					<th scope="col">Linux</th>
					<th scope="col" colSpan="2">Actions</th>
				</tr>
			</thead>
			<tbody>
				{students.map(({id, idStudent, name, math, programming, databases, linux}) => (
					<tr key={id}>
						<th>{idStudent}</th>
						<td>{name}</td>
						<td>{math}</td>
						<td>{programming}</td>
						<td>{databases}</td>
						<td>{linux}</td>
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