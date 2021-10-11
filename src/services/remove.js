import { API } from "../API.js";

const remove = (url, id) => {
    return API.delete(`${url}/${id}`);
}

export default remove;