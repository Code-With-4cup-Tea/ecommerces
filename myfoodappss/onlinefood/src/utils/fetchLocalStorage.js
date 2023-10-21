
export const fetchLocalStorage= ()=>{
     const fetchdata = localStorage.getItem("datastore") !=="undefined"
     ? JSON.parse(localStorage.getItem("datastore")) : localStorage.clear();

     return fetchdata;
};