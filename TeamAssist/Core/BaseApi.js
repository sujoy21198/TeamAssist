import axios from 'axios';

export default class BaseApi {
    BaseUrl = "http://teamassist.websteptech.co.uk/api/";

    static BasePostRequest(url,value){
        let resp = axios.post(this.BaseUrl+ url,value)
        //console.log(resp.data);
        alert(value);
    }
    // BasePostRequest = (url,value) =>{
    //     let resp = axios.post(this.BaseUrl+ url,value)
    //     alert(value);
    // }
}