const usersIntialState=[]

const usersReducer=(state=usersIntialState,action)=>{
    switch(action.type){
        case "SET_USERS":{
            return [...action.payload]
        }
        case "EDIT_USERS":{
            return [...action.payload]
        }
        default:{
            return[...state]
        }
    }
}
export default usersReducer