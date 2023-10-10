import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { Appprovider } from './context/Productcontext.jsx'
import reducer from '../src/reducer/Productreducer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Appprovider> {/*4: after create approvider we have enclosed app in side apprpvider taki app approvider ke data ko access kar saekey        */}
    <App />      {/*now this app work like children                     */}
  </Appprovider>
);
