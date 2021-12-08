let startY =0,moveY=0,distance=0;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        trans:"translateY(0)",
        time:"",
        userInfo:{}
    },

    handleTouchStart(e){
        startY = e.touches[0].clientY;
        this.setData({
            time:""
        })
    },
    handleTouchMove(e){
        moveY = e.touches[0].clientY;
        distance = moveY-startY;
        if(distance<0){
            return;
        }
        else if(distance>120){
            distance=120;
        }
        this.setData({
            trans:`translateY(${distance}rpx)`
        })
    },
    handleTouchEnd(e){
        this.setData({
            trans:"translateY(0)",
            time:"transform 1s ease"
        })
    },
    toLogin(){
        wx.navigateTo({
          url: '/pages/login/login'
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const userInfo = JSON.parse(wx.getStorageSync('userInfo'));
        console.log(userInfo.avatarUrl)
        this.setData({
            userInfo
        })
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