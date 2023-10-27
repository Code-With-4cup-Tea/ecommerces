import { doc, setDoc } from "firebase/firestore"
import { firestore } from "../firebase.config"

//saving new item in firebase
//setDoc function comes form firestore it help to create new value even there is no any value than create 
// if there is an vlaue than update it
// doc method use to create new document
// firestore coming form firebase.config
// foodItem kiya collection app create karnay ja rahey ho
// fooditem collection allready there than open it and update it

//date.now use for unique id
//data recive as propes form other components
// merge use for merege data jo data hum future main add kargay usay update kar dega agar nahi hoga koi to error kar dega
//doc(firestore,"foodItems",`${Date.now()}`) doc function completed here
//after doc , pased data 
export const saveItems =async (data)=>{
     await setDoc(doc(firestore,"foodItems",`${Date.now()}`), data,{
        merge:true,});

}