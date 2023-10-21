import { fetchData } from "../utils/Fetchdata"

const gotuserdata = fetchData();

export const initialState = {
    user: gotuserdata,
    

}
