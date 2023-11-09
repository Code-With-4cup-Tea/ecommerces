
export const getLocalStorage = ()=>{
    const storeLocalStorage = localStorage.getItem("movie") !== "undefined" ?

    JSON.parse(localStorage.getItem("movie")) : localStorage.clear();

    return storeLocalStorage;
             

     
}