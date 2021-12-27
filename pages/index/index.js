/** 引入 tabbar 组件的 init函数
  * init函数封装了 Page函数的所有生命周期函数
 */
import {
    init,
    Tabbar,
    setTabbarData
} from "../../components/template/tabbar";

const UserPageData = {
    data: {
        motto: 'Hello World',
        userInfo: {},
    },

    /**
      * 生命周期函数
    */
    onLoad() {
        let that = this
        let app = getApp()

        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    },
    onReachBottom(ev) {
        console.log("ReachBottom");
        this.setData({
            userInfo : {
                avatarUrl: this.data.userInfo.avatarUrl,
                nickName: "ReachBottom"
            }
        });
    },
    onPullDownRefresh() {
        this.setData({
            userInfo : {
                avatarUrl: this.data.userInfo.avatarUrl,
                nickName: "PullDown"
            }
        });
        setTimeout(() => {
            wx.stopPullDownRefresh();
            console.log("stop");
        }, 300);
    },


    /**
      * 逻辑绑定
    */
    bindViewTap() {
        console.log("tap");
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
};

// tabbar 对象的数据
const tabbarData = [
    {
        iCount: 98,                         //未读数目 Integer
        sIconUrl: "../../img/home.png",     //按钮图标 String
        sTitle: "home",                     //按钮名称 String
    },
    {
        iCount: 0,
        sIconUrl: "../../img/safari.png",
        sTitle: "safari",
    },
];

// 另一种添加数据的方式
tabbarData.push({
    iCount: 1,
    sIconUrl: "../../img/note.png",
    sTitle: "note",
});


// 调用 组件的设置函数，传入数据对象
setTabbarData(tabbarData);

// 调用已经封装好的启动函数 类似于 原生的Page
// 已经封装所有的接口
init(UserPageData);

// 注册tab被单击时触发的事件
Tabbar.addListener(function(ev) {
    console.log(ev);
    // ev.key === 'note'
    // ev的key对应被点击的tab的title
});
