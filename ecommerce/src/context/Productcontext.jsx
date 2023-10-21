import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios'
import reducer from '../reducer/Productreducer.jsx'

const AppContext = createContext(); //1:create a context

//api calling using axios 

const Api = "https://api.pujakaitem.com/api/products" //9: api link

const initialState={
    isLoading:false, 
    isError:false,
    Products:[], //this for complete product page
    featureProducts:[] //this for home screen products its show only thos item whose value ture in database
}

const Appprovider = ({children})=>{ //2:creacte provider after create context
    const [state, dispatch] = useReducer(reducer,initialState);// this is create after api fetch complete

 const getProducts = async (url)=>{ //9: this is get product function with async await

   dispatch({type:"SET_LOADING"})
   //note: dispatch alwasy call action method of reducer function
    try {   //10: first try block run
        const resp = await axios.get(url); //12: get reponse of data
        // console.log(resp);
        const productsstore =await resp.data; //13: data strore in productsstore
        // console.log(productsstore);
    
        dispatch({type:"SET_API_DATA", payload:productsstore})
    } catch (error) { //11: run error block in any error
        dispatch({type:"API_ERROR"});
        
    }

}


    useEffect(()=>{   //7: use effect create for when page load than at least on time run
            getProducts(Api);   //8: get product is a funcition with api parameter 
            // console.log(getProducts(Api))

    },[])

    return <AppContext.Provider value={{...state}}>  {/* 5:appcontext.provider with value                        */}
                    {children}
         </AppContext.Provider>

}
//custom hooks

const useProductContext = ()=>{
    return useContext(AppContext); //6: this is custom hook for easliye access in during usecontext
}


export { Appprovider,AppContext,useProductContext }; //3: export app provide for using in main.jsx



