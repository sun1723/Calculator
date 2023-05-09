import * as React from 'react' 
import { Fragment } from "react"
import {Calculator} from "./Calculator"

const App = () => {
  const changeValue = (event) => {
    console.log(event.target)
  }
  return <Fragment><Calculator /></Fragment>
}

export default App;