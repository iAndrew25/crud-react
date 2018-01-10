import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './home/home';

export default function() {

	return(
		<Switch>
			{/*<Route exact path='/' render={() => <Home />}/>*/}
			<Route component={() => (<Home />)}/>
		</Switch>
	)
}