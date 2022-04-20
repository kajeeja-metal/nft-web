import axios from "axios";
import qs from "qs"
import { baseURL } from "@/services/endpoint"
import Router from "next/router";
import Cookies from 'js-cookie'

export const getScanqr = async (qrText) => {
    const token = Cookies.get('token')
    try {
        var data = qs.stringify({
            'qrcode': qrText 
           });
           var config = {
             method: 'post',
             url: baseURL + "/api/v1/qrcode/scan",
             headers: { Authorization: `Bearer ${token}`,'Content-Type': 'application/x-www-form-urlencoded' },
             data : data
           };
           
           const response =   await axios(config)
           .then(function (response) {
             return response.data
           }).catch((error)=>{
             return error.response.data
           })
        return response;
    } catch {

    }
}
export const getMe = async (token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);
    // axios.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY0NDI0NzE2MH0.XTTV6F23bX6SRitwWTqAC1Aci6zTEoeH5y4JVKDlxhI`
    if (token) {
      axios.defaults.headers.common['Authorization'] = `${token}`;
    }
    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    var requestOptionss = {
      method: 'POST',
      headers: myHeaders,
      };
    axios.create({
      baseURL: baseURL,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    let data = await fetch(baseURL + "/api/v1/participant/me", requestOptions)
    .then(response => response.text())
    .then(async result => {
        // await fetch(baseURL + "/api/v1/participant/mainPage", requestOptionss)
        return JSON.parse(result)
    })
    .catch(error => {
        console.log(error)
        return error
    });
    return data
}
export const getWeviewLoading = async (token) => {
  // axios.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY0NDI0NzE2MH0.XTTV6F23bX6SRitwWTqAC1Aci6zTEoeH5y4JVKDlxhI`
  var config = {
    method: "POST",
    url: baseURL + "/api/v1/participant/mainPage",
    headers: {
      Authorization: axios.defaults.headers.Authorization,
    },
  };
  let data = await axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.response.data;
    });
  return data;
}