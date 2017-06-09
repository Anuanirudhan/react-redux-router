import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
// import { Route } from 'react-router-dom'
// // import Header from '../components/Header'
// import Nav from './components/nav'
// import Footer from './components/Footer'
// import main from './components/main'
// import App from './containers/App'
import reducer from './reducers'
import Routers from './router'
import './todomvc-app-css/index.css'

const store = createStore(reducer)

render(
  <Provider store={store}>
      <BrowserRouter>
	   {Routers}
	  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
