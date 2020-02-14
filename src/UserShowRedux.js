import React from 'react'
import {connect} from 'react-redux'
//import {Link} from 'react-router-dom'

class UserShowRedux extends React.Component{
    render(){
        return(
            <div>
                <h2>user show page {this.props.match.params.id}</h2>
                <p>{this.props.user.name} -{this.props.user.email} - {this.props.user.id}</p>

                <h2> posts Written by user-{this.props.posts.length}</h2>
                <ul>
                    {this.props.posts.map(post=>{
                        return <li key={post.id}>{post.title} </li>
                    })}
                </ul>
                </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
      users:state.users
    }
  }
  
  export default connect(mapStateToProps)(UserShowRedux)
  