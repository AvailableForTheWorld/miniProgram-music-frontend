// pages/index/index.js
import request from '../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bannerList:[],
        reccomendList:[],
        topList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:async function (options) {
        
          const banner = await request('/banner',{type:2});
          const reccom = await request('/personalized',{limit:10});
          this.setData({
              bannerList:banner.banners,
              reccomendList:reccom.result
          })
          let index=0;
          const topList=[]
          while(index<5){
              const topListItem = await request('/top/list',{idx:index++});
              const finalItem = { name: topListItem.playlist.name,tracks:topListItem.playlist.tracks.slice(0,3)};
              topList.push(finalItem);
              this.setData({
                  topList
              })
          }
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