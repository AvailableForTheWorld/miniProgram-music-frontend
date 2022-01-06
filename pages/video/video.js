import request from '../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navTabList:[],
        activeId:0,
        videoListItem:[],
        videoId:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:async function (options) {
        const that = this
        this.getVideoTab().then(function(res,rej){
            that.getVideoList(that.data.activeId);
        });
        
    },
    handlePlay(e){
        let vid = e.currentTarget.id;
        if(this.videoContext&&this.vid&&this.vid!=vid)
            this.videoContext.stop();
        this.vid=vid;
        this.setData({
            videoId:vid
        });
        this.videoContext = wx.createVideoContext(vid);
        this.videoContext.play();
        
    },
    async getVideoTab(){
        const nav = await request('/video/group/list',{isLogin:false})
        this.setData({
            navTabList:nav.data.slice(0,11),
            activeId:nav.data[0].id
        })
        
    },
    async getVideoList(navId){
        const videoList = await request('/video/group',{id:navId,isLogin:false})
        wx.hideLoading()
        this.setData({
            videoListItem:videoList.datas
        })
    },
    changeIndex(e){
        let navId = e.currentTarget.id-0
        this.setData({
            activeId:navId
        })
        wx.showLoading({
          title: '正在加载',
          mask:true
        });
        this.getVideoList(navId)
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