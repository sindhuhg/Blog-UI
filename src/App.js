import React from 'react';
import {connect} from 'react-redux'
import {BrowserRouter,Route,Link} from 'react-router-dom'


import UserListRedux from './UserListRedux'
import PostListRedux from './PostListRedux'
import TodoListRedux from './TodoListRedux'
import UserShowRedux from './UserShowRedux'

function App() {
  return (
    <BrowserRouter>
    <div>
      <h1>Redux</h1>
      
      <Link to ='/users'>Users</Link> |
      <Link to ='/posts'>Posts</Link> |
      <Link to ='/todos'>Todos</Link> |

      <Route path="/users" component={UserListRedux} exact={true}/>
      <Route path="/posts" component={PostListRedux}/>
      <Route path="/todos" component={TodoListRedux}/>
      <Route path="/users/:id" component={UserShowRedux}/>
    </div>
    </BrowserRouter>
  );
}

const mapStateToProps=(state)=>{
  return{
    users:state.users
  }
}

export default connect(mapStateToProps)(App)
