// DO NOT DELETE
import * as React from 'react'

const DogImage = (props) =>{
	return(
		<div>
			<img src={props.url} className="dog-img" alt="ワンちゃんの画像"/>
		</div>
		)
};
export default DogImage;