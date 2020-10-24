import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from "./data.json";
import rate from "./rate.json";

ReactDOM.render((
	<App initialState={data.data} initialRate={rate.rate}/>
), document.getElementById('root'));
