// 运营平台页面
const AdminPages = {
  page1: {
    path: '/a/page_1',
    component: () => import('../../views/page_1/Page_1.vue'),
    meta: {
      key: '1',
      title: 'Page1',
      isLeaf: false,
      hidden: false
    }
  },
  page1T1: {
    path: '/a/page_1/page_1_1',
    component: () => import('../../views/page_1/page_1_1/Page_1_1.vue'),
    meta: {
      key: '1_1',
      title: 'Page1_1',
      isLeaf: true,
      hidden: false
    }
  },
  page1T1T1: {
    path: '/a/page_1/page_1_1',
    component: () => import('../../views/page_1/page_1_1/Page_1_1.vue'),
    meta: {
      key: '1_2',
      title: 'Page1_2',
      isLeaf: true,
      hidden: false
    }
  },
  page2: {
    path: '/a/page_2',
    component: () => import('../../views/page_1/Page_1.vue'),
    meta: {
      key: '2',
      title: 'Page2',
      isLeaf: true,
      hidden: false
    }
  }
}

// 运营平台路由
const AdminRoutes = [
  {
    path: '/a',
    component: () => import('../../components/YcContainer'),
    children: [{
      path: AdminPages.page1.path,
      component: () => AdminPages.page1.component()
    }, {
      path: AdminPages.page1T1.path,
      component: () => AdminPages.page1T1.component()
    }]
  }
]

// 官网路由
const FrontRoutes = [
  {
    path: '/f',
    component: () => import('../../components/YcContainer'),
    children: [{
      path: '/f/page_1',
      component: () => import('../../components/YcContainer')
    }]
  }
]

// 运营平台侧边菜单
const menus = [AdminPages.page1, AdminPages.page1T1, AdminPages.page1T1T1, AdminPages.page2]
// 系统全路由
const routes = AdminRoutes.concat(FrontRoutes)

export default { routes, menus }
