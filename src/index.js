import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'mobx-react';
import * as stores from './stores';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider {...stores}>
         <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
