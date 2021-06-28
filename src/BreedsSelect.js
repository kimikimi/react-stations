// DO NOT DELETE
import * as React from 'react'

export const BreedsSelect = (props) =>{
	let breeds =[];
	breeds = breeds.concat(props.breeds);
	console.log("hoge",breeds);
	console.log("foo-pops")
	const listItems = breeds.map((breed)=>
		<option key={breed} value={breed} text={breed}>{breed}</option>
		)
		console.log ({listItems});
	return (
	<div>
		<select defaultValue={props.selected} onChange={props.change}>
		<option>Plese select</option>
		{listItems}
		</select>
	</div>
	)
}