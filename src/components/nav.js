import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'

// import PropTypes from 'prop-types'

export default class Nav extends Component {
  render() {
    return (
      <ul>
      	<li> <NavLink to='/main'>dff</NavLink> </li>
      </ul>
    )
  }
}