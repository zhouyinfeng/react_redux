import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import {AppContainer} from 'react-hot-loader';
import reducers from './reducer'
registerServiceWorker();

//const store = createStore(reducers,compose(
//    applyMiddleware(thunk),
//))

//注入操作
const middleware = [thunk];
const store = createStore(reducers, applyMiddleware(...middleware))
// 增加react-hot-loader保持状态刷新操作，如果不需要可去掉并把下面注释的打开
ReactDOM.render((
    <AppContainer>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </AppContainer>), document.getElementById('root'))