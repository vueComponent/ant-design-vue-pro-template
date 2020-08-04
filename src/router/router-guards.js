import router from './index'
import ls from 'store'
import NProgress from 'nprogress' // progress bar
import '@/components/NProgress/nprogress.less'
import { ACCESS_TOKEN } from '@/store/mutation-types' // progress bar custom style

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const allowList = ['login', 'register', 'registerResult'] // no redirect whitelist
const loginRoutePath = '/user/login'
const defaultRoutePath = '/dashboard'

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  const token = ls.get(ACCESS_TOKEN)
  if (token) {
    console.log('token', token)
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
