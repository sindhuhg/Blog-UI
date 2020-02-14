import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import {startSetUsers, startEditUsers} from './actions/users'
import {startSetTodos} from './actions/todos'
import {startSetPosts} from './actions/posts'

const store = configureStore()
console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(startSetUsers())
store.dispatch(startSetPosts())
store.dispatch(startSetTodos())
store.dispatch(startEditUsers())

const ele =(
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));

