import * as config from "./../constants/config";
import axios from "axios";
export default function requestApi(endpoint, method = "GET", body) {
    return axios({
        method,
        url: `${config.API_URL}/${endpoint}`,
        data: body
    });
}
