
export const getLocalStorage = ()=>{
    const storeLocalStorage = localStorage.getItem("movie") !== "undefined" ?

    JSON.parse(localStorage.getItem("movie")) : localStorage.clear();

    return storeLocalStorage;   
}

export const getWishLocalStorage = ()=>{
    const storeWishLocalStorage = localStorage.getItem("wishStorage") !== "undefined" ?

    JSON.parse(localStorage.getItem("wishStorage")) : localStorage.clear();

    return storeWishLocalStorage ? storeWishLocalStorage:[];
}