// DO NOT DELETE

import * as React from 'react'
import './App.css'
import Header from './Header'
import Description from './Description'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] =React.useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
  return (
    <div>
      <Header title={"Dogアプリ"} />
      <Description description={"ワンちゃんの画像を集めたサイトです"}　text={"更新"} />
      
      
      
      <br/>
      <hr/>
      </div>

      // <button className="button"
      // onClick={()=>fetch('https://dog.ceo/api/breeds/image/random')
      //  .then(response =>{
      //   console.log(response);　
      //   return response.json();
      //  })
      //  .then(data => {
      //   console.log(data);
      //   setDogUrl(data.message);
      // })}>{props.text}</button>
       
    
  )
}
// <button onClick={()=>setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg ")}>更新</button>