import {config} from './config'

export default function request(url,data,method='GET'){
    return new Promise((resolve,reject)=>{
        wx.request({
            url:config.mobileHost+url,
            data,
            method,
            success:(res)=>{
              resolve(res.data);
            },
            fail:(err)=>{
              reject(err);
            }
          })
    })
}