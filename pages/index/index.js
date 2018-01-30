//index.js    
//获取应用实例    
var app = getApp()
Page({
  data: {
    movies: [
      { url: '../../images/1.jpg' },
      { url: '../../images/2.jpg' },
      { url: '../../images/3.jpg' },
      { url: '../../images/4.jpg' }
    ],
    swipers: [] ,
    news:[]
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: "http://www.chinascw.net/Xcx/index?id=1",
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        console.log();
          var swipers = [];
          var news=[];
          for(var i=0; i<res.data.banner.length;i++){
            swipers.push(res.data.banner[i]);
          }
          for (var i = 0; i < res.data.news.length; i++) {
            news.push(res.data.news[i]);
          }
          that.setData({ swipers: swipers });
          that.setData({ news: news });      
        } 
     
    })
  },   
  

})    