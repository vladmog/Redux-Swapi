// we'll need axios
import axios from "axios";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

console.log("HELLO")
export const asyncOperation = data=> dispatch => {
    dispatch ({ type: FETCHING })
    axios
    .get ("https://swapi.co/api/people/")
    .then (res => {
        console.log("res: ", res)
        setTimeout(() =>
            dispatch ({
                type: SUCCESS,
                payload: res.data.results
            }), 2000)
    })
    .catch (err => {
        console.log("err: ", err)
        dispatch ({
            type: FAILURE,
            payload: "WHATCHU DO WILLIS"
        })
    })
}


//setTimeout(function, milliseconds, param1, param2, ...)



// export const asyncOperation = () => dispatch => {
//     const request = axios.get('https://swapi.co/api/people/');
//     request.then(res => {
//         console.log(res)
//         dispatch ({
//             type: SUCCESS,
//             PAYLOAD: res.data
//         })
//     })
//     .catch (err => {
//         console.log(err)
//         dispatch ({
//             type: FAILURE,
//             payload: err.response
//         })
//     })
//   };

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

// const asyncOperation = data=> dispatch => {
//     dispatch ({ type: FETCHING })
//     axios.post("https://swapi.co/api/people/", data)
//     .then (res => {
//         dispatch ({
//             type: SUCCESS,
//             PAYLOAD: res.data
//         })
//     })
//     .catch (err => {
//         dispatch ({
//             type: FAILURE,
//             payload: err.response
//         })
//     })
// }