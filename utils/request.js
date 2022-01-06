import {config} from './config'

console.log(wx.getStorageSync('cookies'))
export default function request(url,data,method='GET'){
    return new Promise((resolve,reject)=>{
        wx.request({
            url:config.host+url,
            data,
            method,
            header:{
              cookie:wx.getStorageSync('cookies')?wx.getStorageSync('cookies').find(item=>item.indexOf('MUSIC_U')!==-1):''
            },
            success:(res)=>{
              if(!data.isLogin){

              }
              else if(data.isLogin){
                wx.setStorage({
                  key:'cookies',
                  data:res.cookies
                })
                console.log(res.cookies)
              }
              resolve(res.data);
            },
            fail:(err)=>{
              reject(err);
            }
          })
    })
}