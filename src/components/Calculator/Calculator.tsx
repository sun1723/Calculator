import * as React from 'react' 
import { Fragment } from "react"
import { Operations } from "../Operations"
import { Signs } from "../Signs"
import { NumberPad } from '../NumberPad'

const Calculator = () => {
  return (
    <Fragment>
      <NumberPad/>
      <Operations/>
      <Signs />
    </Fragment>
  )
}

export default Calculator;