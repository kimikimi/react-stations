// DO NOT DELETE
import * as React from 'react'
import {useState} from 'react'
import {DogImage} from './DogImage.js'

export const Description = (props) =>{
	const [dogUrl, setDogUrl] =React.useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
	return(
		<div className="Description">
			<p>{props.description}</p>
			<div　className="right">
				<DogImage url={dogUrl}/>
				<button className="button"
	      		onClick={()=>fetch('https://dog.ceo/api/breeds/image/random')
	       		.then(response =>{
	        	 console.log(response);　
	       		 return response.json();
	       		})
	       		.then(data => {
	       		 console.log(data);
	        		setDogUrl(data.message);
	      		})}>{props.text}</button><
	      		/div>
		</div>
	)
};
