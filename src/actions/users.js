import axios from 'axios'
 
export const setUsers=(users)=>{
    return{
        type:'SET_USERS',
        payload:users
    }
}
export const editUsers=(users)=>{
    return{
        type:'EDIT_USERS',
        payload:users
    }
}

export const startSetUsers=()=>{
    
    return(dispatch)=>{
        axios.get(`http://jsonplaceholder.typicode.com/users`)
        .then(response =>{
            const users=response.data
            dispatch(setUsers(users))
        })
    }
}

export const startEditUsers=(id)=>{
    //const id=this.Props.match.params.id
    return(dispatch)=>{
    axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const user=response.data
            this.setState({user})
        
        })
    }
}