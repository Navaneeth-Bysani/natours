import axios from 'axios';

//type is either password or data
export const updateSettings = async (data,type)=> {
	try{
		console.log('hello world')
		const url = type === 'password' ? 'http://127.0.0.1:8000/api/v1/users/updateMyPassword' : 'http://127.0.0.1:8000/api/v1/users/updateMe'
		const res = await axios({
		method: 'PATCH',
		url,
		data
	});
		if(res.data.status === 'success') {
			alert(`${type.toUpperCase()} updated successfully`)
		}
	}catch(err) {
		alert(err.response.data.message)
	}
}
