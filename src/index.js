import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store/index'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));
