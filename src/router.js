import React from 'react'
import { Route } from 'react-router-dom'
// import Header from '../components/Header'
import Nav from './components/nav'
import Footer from './components/Footer'
import main from './components/main'
import App from './containers/App'

const Routers = <switch>
		<Route component={Nav} path='/' />
	    <Route component={main} path='/main' />
	</switch>
export default Routers;