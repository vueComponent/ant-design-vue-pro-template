<template>
  <pro-layout
    title="Ant Design Pro"
    :menus="menus"
    :collapsed="collapsed"
    :theme="theme"
    :layout="layout"
    :content-width="contentWidth"
    :auto-hide-header="autoHideHeader"
    :media-query="query"
    :is-mobile="isMobile"
    :handle-media-query="handleMediaQuery"
    :handle-collapse="handleCollapse"
    :i18n-render="i18nRender"
  >
    <template v-slot:menuHeaderRender>
      <div>
        <img src="~@/assets/logo.svg">
        <h1>Ant Design Pro</h1>
      </div>
    </template>
    <template v-slot:rightContentRender>
      <right-content
        :top-menu="layout === 'topmenu'"
        :is-mobile="isMobile"
        :theme="theme"
      />
    </template>
    <template v-slot:footerRender>
      <div>footerRender</div>
    </template>
    <router-view />
  </pro-layout>
</template>

<script>
import RightContent from '@/components/RightContent/RightContent'
import { asyncRouterMap } from '@/config/router.config'
import { i18nRender } from '@/locales'

export default {
  name: 'BasicLayout',
  data () {
    return {
      // base
      menus: [],
      // 侧栏收起状态
      collapsed: false,
      // 自动隐藏头部栏
      autoHideHeader: false,
      // 媒体查询
      query: {},
      // 布局类型
      layout: 'sidemenu', // 'sidemenu', 'topmenu'
      // 定宽: true / 流式: false
      contentWidth: false,
      // 主题 'dark' | 'light'
      theme: 'dark',
      // 是否手机模式
      isMobile: false,
    }
  },
  created () {
    this.menus = asyncRouterMap.find(item => item.path === '/').children
  },
  methods: {
    i18nRender,
    handleMediaQuery (val) {
      this.query = val
      if (this.isMobile && !val['screen-xs']) {
        this.isMobile = false
        return
      }
      if (!this.isMobile && val['screen-xs']) {
        this.isMobile = true
        this.collapsed = false
      }
    },
    handleCollapse (val) {
      this.collapsed = val
    },
  },
  components: {
    RightContent,
  },
}
</script>

<style lang="less">
@import "./BasicLayout.less";
</style>
