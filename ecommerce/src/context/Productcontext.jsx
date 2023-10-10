import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios'
import reducer from '../reducer/Productreducer.jsx'

const AppContext = createContext();

//api calling using axios 

const Api = "https://api.pujakaitem.com/api/products"

const initialState={
    isLoading:false,
    isError:false,
    Products:[], //this for complete product page
    featureProducts:[] //this for home screen products its show only thos item whose value ture in database
}

const Appprovider = ({children})=>{
    const [state, dispatch] = useReducer(reducer,initialState);// this is create after api fetch complete

const getProducts = async (url)=>{

   dispatch({type:"SET_LOADING"})
   //note: dispatch alwasy call action method of reducer function
    try {
        const resp = await axios.get(url);
        // console.log(resp);
        const productsstore =await resp.data;
        // console.log(productsstore);
    
        dispatch({type:"SET_API_DATA", payload:productsstore})
    } catch (error) {
        dispatch({type:"API_ERROR"});
        
    }

}

    useEffect(()=>{
            getProducts(Api);

    },[])

    return <AppContext.Provider value={{...state}}>
                    {children}
         </AppContext.Provider>

}
//custom hooks

const useProductContext = ()=>{
    return useContext(AppContext);
}


export { Appprovider,AppContext,useProductContext };



