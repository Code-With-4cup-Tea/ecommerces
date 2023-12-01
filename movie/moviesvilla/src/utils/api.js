import axios from 'axios'


const BASE_URL ="https://api.themoviedb.org/3";
const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjRmYTgwN2I5MTE5OGI1Y2VhODVmNDU3YjFmZjRkYiIsInN1YiI6IjY1NGQzYTlmMjkzODM1MDEzODdkNzc1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7E-HLYF3dFKF-MUPCtLj6IQMjlUS4DXM4dwwmfJs3OU"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN
}

export const fetchDataApi = async(url,params)=>{
        try{
              const {data} = await axios.get(BASE_URL+url,{
                headers,
                params
              })
              // console.log("i am in api js",data)
              return data;
              
        }catch(error){
            console.log(error)
        }
}