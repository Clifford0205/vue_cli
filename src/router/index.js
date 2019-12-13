import Vue from 'vue'
import VueRouter from 'vue-router'
//官方的元件

import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';
//自訂的分頁文件

Vue.use(VueRouter)


export default new VueRouter({
    routes:[
        {
            name:'首頁', //元件的呈現名稱
            path:'/index', //對應的虛擬路徑
            component:Home, //對應的元件
        },
        {
            name:'分頁',
            path:'/page',
            component:Page,
        }
    ]
});