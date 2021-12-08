// pages/login/login.js
import request from '../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        phone:"",
        password:""
    },
    handleInput(e){
        const type = e.currentTarget.dataset.type;
        const value = e.detail.value;
        this.setData({
            [type]:value
        })
    },
    async login(){
        const {phone,password} = this.data;
        const phoneRex = /^1[^1|2]\d{9}$/;
        if(!phone){
            wx.showToast({
              title: '手机号不能为空',
              icon:"error"
            })
            return;
        }else if(!phoneRex.test(phone)){
            wx.showToast({
              title: '手机号格式有误',
              icon:"error"
            })
            return ;
        }else if(!password){
            wx.showToast({
              title: '密码为空',
              icon:"error"
            })
            return;
        }
        
        const result = await request('/login/cellphone',{phone,password});
        if(result.code===200){
            wx.switchTab({
              url: '/pages/my/my',
            })
        }else if(result.code===400){
            wx.showToast({
              title: '手机号输入有误',
              icon:"error"
            })
        }else if(result.code === 500){
            wx.showToast({
              title: '密码错误',
              icon:"error"
            })
        }else{
            wx.showToast({
              title: '登录失败',
              icon:"error"
            })
        }

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})