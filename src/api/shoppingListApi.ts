import axios from "axios";


export const shoppingListApi = axios.create({
    baseURL: "http://localhost:4000/api/"
})