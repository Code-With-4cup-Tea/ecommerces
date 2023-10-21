import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom"
import { UserContextProvider } from './context/Usercontex.jsx'
// import UserContext from './context/Stateprovider.jsx'
// import reducer from './context/reducer.js'
// import { initialState } from './context/initialState.js'



ReactDOM.createRoot(document.getElementById('root')).render(
 <Router>
          {/* <UserContext.Provider reducer={reducer} initiaState={initialState}> */}
          <UserContextProvider>
                    <App />
                    </UserContextProvider>
        {/* </UserContext.Provider> */}
       
 </Router>
   
  
)
