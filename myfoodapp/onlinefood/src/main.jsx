import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom"
import reducer from './context/reducer.js'
import { initialState } from './context/initialState.js'
import { StateProvider } from './context/Stateprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Router>
            <StateProvider reducer={reducer} initialState={initialState}>
                    <App />
            </StateProvider>
            
       
 </Router>
   
  
)
