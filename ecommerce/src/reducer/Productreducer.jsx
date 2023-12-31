import { GiTurret } from "react-icons/gi"

const ProductReducer =(state,action)=>{
    // if(action.type === "SET_LOADING"){
    //     return {
    //         ...state,
    //         isLoading:true,
    //     }
    // }

    // if(action.type === "API_ERROR"){
    //     return {
    //         ...state,
    //         isLoading:false,
    //         isError:true,
    //     }
    // }

        switch(action.type){
            case"SET_LOADING":
            return {
                        ...state,
                        isLoading:true,
                    }
            
            case"SET_API_DATA":
                    const featureData = action.payload.filter((curElem)=>{
                                return curElem.featured ===true;
                    })

                    return {
                        ...state,
                        isLoading:false,
                        Products:action.payload,  //all data in side Products
                        featureProducts:featureData,
                    }
                    
                    

            case "API_ERROR":
                return {
                            ...state,
                            isLoading:false,
                            isError:true,
                        }

            default:
                return state;
                
        }

            return state;
}

export default ProductReducer;