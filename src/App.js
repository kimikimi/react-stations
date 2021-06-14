// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] =React.useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
  return (
    <div>
      <header>Dogアプリ</header>
      <img src={dogUrl} alt="" />
      <br/>
      
      <button onClick={()=>fetch('https://dog.ceo/api/breeds/image/random')
       .then(response =>{console.log(response);　return response.json();
       })
       .then(data => {console.log(data);setDogUrl(data.message);})}>更新</button>
    </div>
  )
}
// <button onClick={()=>setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg ")}>更新</button>