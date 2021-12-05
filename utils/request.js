export default (url,data,method='GET')=>{
    return new Promise((resolve,reject)=>{
        wx.request({
            url,
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