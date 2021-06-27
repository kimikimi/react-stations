// DO NOT DELETE

import * as React from 'react'
import './App.css'
import {Header} from './Header'
import {Description} from './Description'
import {DogListContainer} from './DogListContainer'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  
  return (
    <div>
      <Header title={"Dogアプリ"} />
      <Description description={"ワンちゃんの画像を集めたサイトです"}　text={"更新"} />

      <br/>
      <hr/>
      <DogListContainer />
    </div>

       
    
  )
}
