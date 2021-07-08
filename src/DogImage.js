// DO NOT DELETE
import * as React from 'react'

export const DogImage = (props) =>{
	return(
		<div className="dogImage">
			<img src={props.url} className="dog-img" alt="ワンちゃんの画像"/>
		</div>
		)
};
