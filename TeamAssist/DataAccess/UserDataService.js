import BaseApi from '../Core/BaseApi';

export default class UserDataService extends BaseApi{
    static SendOtp(phone){
        this.BasePostRequest("OTPcheck",phone);
    }
}