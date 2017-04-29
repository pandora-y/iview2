const routers = [
    {
        path: '/',
        meta: {
            title: '攀臣客户信息管理系统'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    }
    , {
        path: '/login',
        meta: {
            title: '用户登录'
        },
        component: (resolve) => require(['./views/login.vue'], resolve)
    }
    //, {
    //    path: '/customManage',
    //    meta: {
    //        title: '客户管理'
    //    },
    //    component: (resolve) => require(['./views/custom/index.vue'], resolve)
    //}
    //, {
    //    path: '/roleManage',
    //    meta: {
    //        title: '角色管理'
    //    },
    //    component: (resolve) => require(['./views/role/index.vue'], resolve)
    //}
    //, {
    //    path: '/userManage',
    //    meta: {title: '用户管理'},
    //    component: (resolve) => require(['./iviews/user/index.vue'], resolve)
    //}
];
export default routers;