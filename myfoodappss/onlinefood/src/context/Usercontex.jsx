import {  createContext, useContext,useReducer, useState} from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config'
import reducer from "../reducer/Userrreducer";
import { ACTION_TYPE } from "../reducer/Userrreducer";
import { fetchLocalStorage } from "../utils/fetchLocalStorage";



const UserContext = createContext(null);

const fetcheddata = fetchLocalStorage();

export const initialState ={
    user:fetcheddata,
}

const UserContextProvider = ({children})=>{
    const firebaseauth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user},dispatch] = useReducer(reducer,initialState);
//    console.log(user);

    //   const  userdata={
    //         user,dispatch
    //     }
    const [active,setActive] = useState(false);
    

     const login = async ()=>{
        if(!user){
            // const {user:{refreshToken,providerData}} = await signInWithPopup(firebaseauth,provider);
        // console.log(providerData[0])
        // const data = await signInWithPopup(firebaseauth,provider)
        // console.log(data);
        // const user = data.user.providerData[0];
        // console.log(user);

        //after d structure of user
        const {user:{providerData}} = await signInWithPopup(firebaseauth,provider)
        // console.log(providerData[0]); // this show all information of user in obj
        // console.log(providerData[0].displayName) // this show user id name
        // var userinfo = providerData[0];
        // console.log(userinfo.photoURL)
        // setUserinfo(providerData[0]); using usestate 02

        //now we are using context api with reducer
        dispatch({
            type:ACTION_TYPE.SET_USER,
            user:providerData[0]
        })
        localStorage.setItem("datastore",JSON.stringify(providerData[0]))
        }else{
            setActive(!active)
        }
    }

    
    const logout = () =>{
          setActive(false);
          localStorage.clear();
          dispatch({
            type:ACTION_TYPE.SET_USER,
            user:null
          });
    }
    return <UserContext.Provider value={{user,dispatch,login,active,logout}} > 
            {children}
    </UserContext.Provider>
}

//custom hooks
const UseUserContext = ()=>{
    return useContext(UserContext);
}

export {UserContextProvider,UseUserContext,UserContext}