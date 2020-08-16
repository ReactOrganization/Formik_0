import React from 'react'
import { useFormik } from 'formik'

export default function YouTubeForm() {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			channel: ''
		}
	})
	 
console.log("Form values", formik.values)

	return (
		<div>
			<form>
				<label>Name</label>
				<input type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} placeholder='yoo' />

				<label htmlFor="email">E-mail</label>
				<input type="text" name="email" id="email" onChange={formik.handleChange} value={formik.values.email}/>

				<label htmlFor="channel">channel</label>
				<input type="text" name="channel" id="channel" onChange={formik.handleChange} value={formik.values.channel}/>
				<button >Submit</button>
			</form>
		</div>
	)
}
