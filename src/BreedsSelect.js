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
        <div　className="BreedsSelect">
            <label>Breeds List</label>
            <select required value={props.selectedBreed} onChange={event => props.setBreed(event.target.value)}>
                <option value="" className="default">Select</option>
                {listItems}
            </select>
            <button className="button" onClick={props.getDogImage}>表示</button>
        </div>
    )
}