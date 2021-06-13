// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] =React.useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
  function ssetDogUrl(){
    // this.useState
    console.log("hogehoge");
  }
  return (
    <div>
      <header>Dogアプリ</header>
      <img src={dogUrl} alt="" />
      <button onClick={()=>setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg ")}>更新</button>
    </div>
  )
}
