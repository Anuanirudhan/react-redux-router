import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import mainList from './mainList'

class main extends Component {
  render() {
    return (
      <div className="header">
        <h2>List</h2>
        <mainList games="this.props.games"></mainList>
      </div>
    )
  }
}
main.propTypes = {
	games : PropTypes.array.isRequired
}
function mapStateToProps(state) {
	return {
		games: state.games
	}
}

export default connect(mapStateToProps)(main);