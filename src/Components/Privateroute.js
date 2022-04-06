import React from 'react'
import {Route, Redirect, Routes} from 'react-router-dom'

const Privateroute = ({children, ...rest}) => {
  return (
    <Route {...rest} render={() => (children)}/>
  )
}

export default Privateroute