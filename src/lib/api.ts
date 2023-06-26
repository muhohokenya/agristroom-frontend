import axios from "axios";
import { BaseURL } from "./constants";


export const apiPost = async(data = {}) => {
    let config = {};

    if(localStorage.getItem("access_token")){
        config = {
            headers: {
                authorization: `Bear ${localStorage.getItem("access_token")}`
            }
        }
    }

    try {
        const res =  await axios.post(BaseURL, data, config)
        return res.data;
    } catch (error) {
        throw error;
    }
}

export default apiPost;