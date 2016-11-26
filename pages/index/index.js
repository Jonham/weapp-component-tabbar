//index.js
//获取应用实例

var app = getApp()

// 生成img文件的目录
function Img(filename, state) {
    const IMG_FILES_FOLDER = "../../img/";
    const SUBFIX = ".png";

    if (state === undefined) {
        return [
            IMG_FILES_FOLDER,
            filename,
            SUBFIX
        ].join("");
    } else {
        return [
            IMG_FILES_FOLDER,
            filename,
            "-",
            state,
            SUBFIX
        ].join("");
    }
}

var page;

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},

        dataForTabbar: [
            {
                iCount: 1, //未读数目
                sIconUrl: Img("note"), //按钮图标
                sTitle: "note", //按钮名称
            },
            {
                iCount: 99, //未读数目
                sIconUrl: Img("home"), //按钮图标
                sTitle: "home", //按钮名称
            },
            {
                iCount: 0, //未读数目
                sIconUrl: Img("safari"), //按钮图标
                sTitle: "safari", //按钮名称
            },
        ],

    },
    onLoad: function() {
        // console.log('onLoad')
        page = this
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    },


    //逻辑代码
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },

    onTabItemTap(ev) {
        let key = ev.currentTarget.dataset.key;
        setCounts({
            key
        });
    }
})

function setCounts( obj ) {
    let {
        key
    } = obj;
    let {
        dataForTabbar
    } = page.data;

    let data = dataForTabbar.map((item) => {
        let {
            iCount,
            sIconUrl,
            sTitle
        } = item;

        if (sTitle === key) {
            ++iCount;
        }
        return {
            iCount,
            sIconUrl,
            sTitle
        };
    });

    page.setData({
        dataForTabbar: data
    })
}
