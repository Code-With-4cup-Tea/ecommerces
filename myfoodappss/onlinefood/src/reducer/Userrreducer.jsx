export const ACTION_TYPE={
    SET_USER:"SET_USER",
    SET_FOOD_ITEMS:"SET_FOOD_ITEMS"
}

const Userrreducer = (state,action) => {
  
    switch(action.type){
        case ACTION_TYPE.SET_USER:
            return{
                ...state,
                user:action.user
            }

            case ACTION_TYPE.SET_FOOD_ITEMS:
            return{
                ...state,
                foodItems:action.foodItems,
            }

            default: return state
    }
  
}

export default Userrreducer