import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'mobx-react';
import {configure} from 'mobx';
import * as stores from './stores';
import registerServiceWorker from './registerServiceWorker';

//configure({ enforceActions: 'always' }) // 开启严格模式

ReactDOM.render(
    <Provider {...stores}>
         <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
