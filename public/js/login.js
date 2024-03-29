import axios from 'axios';
import {showAlert} from './alert.js'
export const login = async (email,password) => {
	
	try{
	const res = await axios({
		method: 'POST',
		url: 'http://127.0.0.1:8000/api/v1/users/login',
		data: {
			email,
			password
		}
	});

	if(res.data.status === 'success') {
		//showAlert('success','Logged in successfully!');
		alert('successfully logged in')
		window.setTimeout(()=> {
			location.assign('/');
		}, 1500);
	}
	console.log(res);
	} catch (err) {
		alert('error',err.response.data.message);
	}
};

export const logout = async () => {
	try{
		const res = await axios({
			method: 'GET',
			url: 'http://127.0.0.1:8000/api/v1/users/logout'
		});

		if(res.data.status === 'success') location.reload(true);
	} catch(err) {
		alert('error', 'Error logging out! Try again')
	}
}