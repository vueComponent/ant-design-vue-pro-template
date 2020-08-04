import ls from 'store'
import router from './index'
import store from '@/store'
import NProgress from 'nprogress' // progress bar
import '@/components/NProgress/nprogress.less'
import { ACCESS_TOKEN } from '@/store/mutation-types' // progress bar custom style
import { notification } from 'ant-design-vue'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const allowList = ['login', 'register', 'registerResult'] // no redirect whitelist
const loginRoutePath = '/user/login'
const defaultRoutePath = '/dashboard'

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  const token = ls.get(ACCESS_TOKEN)
  if (token) {
    if (to.path === loginRoutePath) {
      next({ path: defaultRoutePath })
      NProgress.done()
    } else {
      // check login user.roles is null
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => {
          const roles = res && res.role
          // generate dynamic router
          store.dispatch('GenerateRoutes', { roles }).then(() => {
            // 根据roles权限生成可访问的路由表
            // 动态添加可访问路由表
            router.addRoutes(store.getters.addRouters)
            // 请求带有 redirect 重定向时，登录自动重定向到该地址
            const redirect = decodeURIComponent(from.query.redirect || to.path)
            if (to.path === redirect) {
              // set the replace: true so the navigation will not leave a history record
              next({ ...to, replace: true })
            } else {
              // 跳转到目的路由
              next({ path: redirect })
            }
          })
        }).catch(() => {
          notification.error({
            message: '错误',
            description: '请求用户信息失败，请重试',
          })
          // 失败时，获取用户信息失败时，调用登出，来清空历史保留信息
          store.dispatch('Logout').then(() => {
            next({ path: loginRoutePath, query: { redirect: to.fullPath } })
          })
        })
      } else {
        next()
      }
    }
  } else {
    // not login
    if (allowList.includes(to.name)) {
      // 在免登录名单，直接进入
      next()
    } else {
      next({ path: loginRoutePath, query: { redirect: to.fullPath } })
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
  next()
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
