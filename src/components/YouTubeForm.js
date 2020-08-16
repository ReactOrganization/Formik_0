import React from 'react'

export default function YouTubeForm() {
	return (
		<div>
			<form>
				<label>Name</label>
				<input type="text" name="name" id="name"/>

				<label htmlFor="email">E-mail</label>
				<input type="text" name="email" id="email"/>

				<label htmlFor="channel">channel</label>
				<input type="text" name="channel" id="channel"/>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}
