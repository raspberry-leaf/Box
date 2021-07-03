import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from "./data.json";
import rate from "./rate.json";
import Favicon from 'react-favicon';


ReactDOM.render((
	<div>
		<Favicon url={require(`./img/favicon.ico`).default}/>
		<App data={data.data} rate={rate.rate}/>
	</div>
), document.getElementById('root'));

