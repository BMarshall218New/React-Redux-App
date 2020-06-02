import axios from "axios";

export const FETCH_HOUSE_START = "FETCH_HOUSE_START";
export const HOUSE_SUCCESS = "HOUSE_SUCCESS";
export const HOUSE_FAILURE = "HOUSE_FAILURE";

export const getHouse = () => {
    return dispatch => {
        dispatch({ type: FETCH_HOUSE_START })
        axios
            .get("https://www.potterapi.com/v1/sortingHat")
            .then(res => {
                console.log("the res in get call", res)
                dispatch({ type: HOUSE_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log("error from get request ", err)
            })
    }
}