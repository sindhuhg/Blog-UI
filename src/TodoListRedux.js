import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class TodoListRedux extends React.Component{
    render(){
        return(
            <div>
                <h1>Listing todos-{this.props.todos.length}</h1>
                {this.props.todos.map((todo)=>{
                    return(
                        <li key={todo.id}><Link to= {`/todos/${todo.id}`}>{todo.name}</Link></li>
                    )
                })}
                
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
      todos:state.todos
    }
  }
  
  export default connect(mapStateToProps)(TodoListRedux)
  