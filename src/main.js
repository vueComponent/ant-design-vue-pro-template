// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locales'
import bootstrap from './core/bootstrap'
import { ConfigProvider, Icon, Button, Tag, Menu, Dropdown, Avatar, Spin, Result, Form, Tabs, Input, Checkbox, Row, Col, Modal, Alert, Divider, notification, message } from 'ant-design-vue'
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import { PageLoading } from '@/components'
import themeConfig from './config/theme.config.js'

// 路由守卫
import './router/router-guards'
// 其他
import './styles/global.less'

// Ant Design Vue
Vue.use(ConfigProvider)
Vue.use(Icon)
Vue.use(Tag)
Vue.use(Button)
Vue.use(Menu)
Vue.use(Dropdown)
Vue.use(Avatar)
Vue.use(Spin)
Vue.use(Result)
Vue.use(Form)
Vue.use(Tabs)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Row)
Vue.use(Col)
Vue.use(Modal)
Vue.use(Alert)
Vue.use(Divider)

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning

// ProLayout
Vue.component('pro-layout', ProLayout)
Vue.component('page-container', PageHeaderWrapper)
window.umi_plugin_ant_themeVar = themeConfig.theme

// Global imports
Vue.use(PageLoading)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  created: bootstrap,
  render: h => h(App),
}).$mount('#app')
