import fetch from './utils/fetch';

export function getStudents() {
	return fetch(`/students`, {
		method: 'GET'
	})
}

export function setStudent(id, grades) {
	return fetch(`/students/${id}`, {
		method: 'PUT',
		body: JSON.stringify(grades)
	})
}


export function removeStudent(id) {
	return fetch(`/users/login`, {
		method: 'DELETE',
		body: JSON.stringify({id})
	})
}