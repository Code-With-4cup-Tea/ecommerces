console.log("before actionTYpe function")
export const actionType = {
        SET_USER : 'SET_USER',
}

console.log("after action type funtion")

const reducer = (state,action)=>{
    console.log("action",action,"state", state);

    switch(action.type){
        
        case actionType.SET_USER:
            return{
                ...state,
                user: action.user,
                
                
            }
            default:
                return state;
                    
                
    }
}

export default reducer;