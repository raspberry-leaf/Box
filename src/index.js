import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from "./data.json";
import rate from "./rate.json";

ReactDOM.render((
	<App data={data.data} rate={rate.rate}/>
), document.getElementById('root'));
