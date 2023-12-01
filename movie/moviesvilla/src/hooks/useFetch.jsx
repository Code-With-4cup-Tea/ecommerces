import React from "react";
import { useState,useEffect } from "react";
import { fetchDataApi } from "../utils/api";

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(null);
    const [error,setError] = useState(null);

    useEffect(()=>{
        setLoading("Loading...")
        setData("null");
        setError("null");

        fetchDataApi(url).then((res)=>{
            setLoading(false)
            setData(res)
        })

        .catch((error)=>{
             setLoading(null)
             setError("something went wrong ")
        })
    },[url])
  return (
    {data,loading,error}
  )
    
  
}

export default useFetch



