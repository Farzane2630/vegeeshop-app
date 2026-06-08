import  axios from "axios";

export const apiRequests = axios.create({
   baseURL: "https://vegeeshop-api-v2.vercel.app/",
   headers : {
      "Content-Type": 'application/json'
   }
})
