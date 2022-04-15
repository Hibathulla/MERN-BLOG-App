import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://daily-diary-blog.herokuapp.com/api/"
})

