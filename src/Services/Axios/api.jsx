import  axios from "axios";

export const apiRequests = axios.create({
   baseURL: "https://vegee-shop-api.onrender.com/",
   headers : {
      "Content-Type": 'application/json'
   }
})
