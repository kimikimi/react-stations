// DO NOT DELETE
import * as React from 'react'

export const BreedsSelect = (props) =>{
	let breeds =[];
	breeds = breeds.concat(props.breeds);
	console.log("hoge",breeds);
	
	const listItems = breeds.map((breed)=>
		<option key={breed} value={breed} text={breed}>{breed}</option>
		)
		
	return (
	<div>
		<select id="choice"　required value={props.selectedBread} onChange={event => props.setBreed(event.target.value)}>
		<option>Plese select</option>
		{listItems}
		</select>
		{props.selectedBreed}
	</div>
	)
}