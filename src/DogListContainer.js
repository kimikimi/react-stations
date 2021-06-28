// DO NOT DELETE
// DO NOT DELETE
import * as React from 'react'
import { useState, useEffect } from 'react'
import {BreedsSelect} from './BreedsSelect'

export const DogListContainer = (props) =>{
	const [breeds, setBreeds]=useState();

	useEffect(()=>{
		// console.log("hogehoge");
		fetch("https://dog.ceo/api/breeds/list/all")
		.then(response=> response.json())
		.then(result => {
			setBreeds(Object.keys(result.message));
			 console.log(Object.keys(result.message));
		})
	},[])
	return(
		<div>
		hogehoge
			// <img src={props.url} className="dog-img" alt="ワンちゃんの画像"/>
			<BreedsSelect breeds={breeds}/>
		</div>
		)
};