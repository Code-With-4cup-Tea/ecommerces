export const fetchUser = () =>{
    const userInfo = localStorage.getItem('user') !=="undefined" ?

    JSON.parse(localStorage.getItem('user')): localStorage.clear();

    //useinfo : agar localstorage ke getiem se user ki jo value milti wo local storage main undefined hai
    //to localstroage getiems ka use karkey user se data fetch karey warna local storage ko clear kar dey

    return userInfo;
}