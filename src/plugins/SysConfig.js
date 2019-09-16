/**
 * 系统配置
 */

// Admin平台涉及的所有页面
const AdminPages = {
  page1: {
    path: '/a/page_1',
    component: () => import('../views/admin/page1/Page1.vue'),
    meta: {
      key: '1',
      title: 'Page1',
      isLeaf: false,
      hidden: false
    }
  },
  page1T1: {
    path: '/a/page_1/page_1_1',
    component: () => import('../views/admin/page1/Page1T1.vue'),
    meta: {
      key: '1_1',
      title: 'Page1_1',
      isLeaf: true,
      hidden: false
    }
  },
  page1T2: {
    path: '/a/page_1/page_1_2',
    component: () => import('../views/admin/page1/Page1T2.vue'),
    meta: {
      key: '1_2',
      title: 'Page1_2',
      isLeaf: true,
      hidden: false
    }
  },
  page2: {
    path: '/a/page_2',
    component: () => import('../views/admin/page2/Page2.vue'),
    meta: {
      key: '2',
      title: 'Page2',
      isLeaf: true,
      hidden: false
    }
  }
}

// 根据AdminPages，生成路由
const AdminRoutes = [
  {
    path: '/a',
    component: () => import('../components/admin/YcaContainer'),
    children: [{
      path: AdminPages.page1.path,
      component: () => AdminPages.page1.component()
    }, {
      path: AdminPages.page1T1.path,
      component: () => AdminPages.page1T1.component()
    }, {
      path: AdminPages.page1T2.path,
      component: () => AdminPages.page1T2.component()
    }, {
      path: AdminPages.page2.path,
      component: () => AdminPages.page2.component()
    }]
  }
]

// 前端平台的路由
const FrontRoutes = [
  {
    path: '/f',
    component: () => import('../components/front/YcfContainer'),
    children: [{
      path: 'home',
      component: () => import('../views/front/home/Home')
    }]
  }
]

// Admin运营平台侧边菜单
const menus = [AdminPages.page1, AdminPages.page1T1, AdminPages.page1T2, AdminPages.page2]
// 系统全路由
const routes = AdminRoutes.concat(FrontRoutes)

export default { routes, menus }
