export const ACTION_TYPE={
    SET_USER:"SET_USER",
}

const Userrreducer = (state,action) => {
  
    switch(action.type){
        case ACTION_TYPE.SET_USER:
            return{
                ...state,
                user:action.user
            }

            default: return state
    }
  
}

export default Userrreducer