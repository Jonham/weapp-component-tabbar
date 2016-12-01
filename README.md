# weapp-component-tabbar
微信小程序自定义组件：带未读数目的tab按钮

## 组件的使用
可以直接复制dist中的文件，到你的项目的pages页。如果放到其他的目录，需要相应修改下列引用中的路径( ./path/to/file/tabbar.subfix )
#### index.wxml (页面的 wxml文件中)

    <!-- 在需要的页面的头部 引入wxml -->
    <import src="../template/tabbar.wxml"/>
    <!-- 直接引入 -->
    <template is="tab-bar" data="{{ jhDataForTabbar }}"/>

    <!--
        其他的页面的元素
     -->

 #### index.wxss (页面的 wxss 文件)

     /* 引入tabbar的样式 */
     @import "../template/tabbar.wxss";


#### index.js (页面的 js 文件)
###### 文件头部：

    import {
       init,                    // 初始化组件及页面
       Tabbar,                  // Tabbar是组件的事件注册中心
       setTabbarData            // 设置/更新 tabbar显示的数据
    } from "../template/tabbar";

###### 文件内部：调用`init(object)`函数，初始化页面

    let UserPageData = {
        data: {
            name: "Jonham.Chen"
        },
        onLoad: function() {
        },
        // ... any others
    };

    init(UserPageData);

###### 文件内部：调用`setTabbarData(object)`函数，设置及更新tabbar的数据


    const tabbarData = [];
    tabbarData.push({
        iCount: 1,              //未读数目
        sIconUrl: 'imageUrl',   //按钮图标的url或者 相对路径
        sTitle: "title",        //按钮名称
    });

    setTabbarData(tabbarData);

###### 文件内部：调用`Tabbar.addListener(fn)`函数增加tab的监听事件

    /** Tabbar.addListener( fn )     增加监听事件
      *       .removeListener( fn )  移除监听事件
      *       .removeAll()           移除所有监听事件
      *
    */
    Tabbar.addListener(function(ev) {
        console.log(ev);
        // ev.key === 'note'
        // ev的key对应被点击的tab的title
    });


PS: 当然，可以通过 `git clone https://github.com/Jonham/weapp-component-tabbar.git` 命令，直接用 [微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html) 打开目录即可预览。    

*使用中，有任何问题、建议，请在[issue](https://github.com/Jonham/weapp-component-tabbar/issues)页提交。或者联系我[ me@jonham.cn ]*
