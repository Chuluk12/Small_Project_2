import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MainPage } from './pages/page1/page1'
import { ListShop } from './pages/page2/page2';
import { DetailShop } from './pages/page3/page3';
import './App.scss';

function App() {
	return(
		<Router>
			<Switch>
			<Route component={MainPage} path="/" exact/>
			<Route component={ListShop} path="/commerce" exact/>
			<Route component={DetailShop} path="/commerce/:id" />
			</Switch>
		</Router>
	)
}
export default App;