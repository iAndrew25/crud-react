import fetch from './utils/fetch';

export function getStudents() {
	return fetch(`/students`, {
		method: 'GET'
	})
}

export function removeStudent(id) {
	return fetch(`/users/login`, {
		method: 'DELETE',
		body: JSON.stringify({id})
	})
}