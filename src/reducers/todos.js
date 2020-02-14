const todosIntialState=[]

const todosReducer=(state=todosIntialState,action)=>{
    switch(action.type){
        case "SET_TODOS":{
            return [...action.payload]
        }
        case "RESET_TODOS":{
            return []
        }
        default:{
            return[...state]
        }
    }
}
export default todosReducer