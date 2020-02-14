import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class PostListRedux extends React.Component{
    render(){
        return(
            <div>
                <h1>Listing posts-{this.props.posts.length}</h1>
                {this.props.posts.map((post)=>{
                    return(
                        <li key={post.id}><Link to= {`/posts/${post.id}`}>{post.title}</Link></li>
                    )
                })}
                
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
      posts:state.posts
    }
  }
  
  export default connect(mapStateToProps)(PostListRedux)
  