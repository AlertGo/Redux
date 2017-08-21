import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';  //资源缓存 下次访问更快获取资源
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducer/reducer'
//provider 状态层层向下传递 直至最底层程序
let StatusGroup=createStore(reducer)
ReactDOM.render(
    <Provider store={StatusGroup}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
