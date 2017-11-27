import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import componentParent from '@/components/yinYongZuJian/componentParent'
import componentParentFuZi from '@/components/zuJianChuanZhiFuZi/componentParentFuZi'
import componentParentZiFu from '@/components/zuJianChuanZhiZiFu/componentParentZiFu'
import componentParentRenYi from '@/components/zuJianChuanZhiRenYi/componentParentRenYi'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/yinYongZuJian/componentParent',
            name: 'componentParent',
            component: componentParent
        },
        {
            path: '/ZuJianChuanZhiFuZi/componentParentFuZi',
            name: 'componentParentFuZi',
            component: componentParentFuZi
        },
        {
            path: '/ZuJianChuanZhiZiFu/componentParentZiFu',
            name: 'componentParentZiFu',
            component: componentParentZiFu
        },
        {
            path: '/ZuJianChuanZhiRenYi/componentParentRenYi',
            name: 'componentParentRenYi',
            component: componentParentRenYi
        },
    ]
})
