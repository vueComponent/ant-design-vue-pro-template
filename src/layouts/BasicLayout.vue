<template>
  <pro-layout
    :title="siteTitle"
    :menus="menus"
    :collapsed="collapsed"
    :media-query="query"
    :handle-media-query="handleMediaQuery"
    :handle-collapse="handleCollapse"
    :i18n-render="i18nRender"
    v-bind="{
      theme,
      layout,
      isMobile,
      contentWidth,
      fixedHeader,
      fixSiderbar: fixedSidebar,
    }"
  >
    <template v-slot:menuHeaderRender>
      <div>
        <img src="~@/assets/logo.svg" :alt="siteTitle">
        <h1>{{ siteTitle }}</h1>
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
      <global-footer />
    </template>
    <setting-drawer
      :settings="{
        layout,
        theme,
        contentWidth,
        primaryColor,
        colorWeak,
        fixedHeader,
        fixSiderbar: fixedSidebar,
        hideHintAlert: false,
        hideCopyButton: false
      }"
      @change="handleSettingChange"
    />
    <router-view />
  </pro-layout>
</template>

<script>
import { mapState } from 'vuex'
import { RightContent, GlobalFooter } from '@/components'
import { SettingDrawer, updateTheme, updateColorWeak } from '@ant-design-vue/pro-layout'
import { i18nRender } from '@/locales'
import { baseMixin } from '@/store/app-mixin'
import {
  CONTENT_WIDTH_TYPE,
  SIDEBAR_TYPE, TOGGLE_COLOR,
  TOGGLE_CONTENT_WIDTH, TOGGLE_FIXED_HEADER,
  TOGGLE_FIXED_SIDEBAR,
  TOGGLE_LAYOUT,
  TOGGLE_MOBILE_TYPE, TOGGLE_NAV_THEME, TOGGLE_WEAK,
} from '@/store/mutation-types'
import defaultSettings from '@/config/defaultSettings'

export default {
  name: 'BasicLayout',
  mixins: [baseMixin], // this[xxx] store value mixin, see this file
  data () {
    this.siteTitle = defaultSettings.title
    return {
      // base
      menus: [],
      // 侧栏收起状态
      collapsed: false,
      // 媒体查询
      query: {},
    }
  },
  computed: {
    ...mapState({
      // 动态主路由
      mainMenu: state => state.permission.addRouters,
    }),
  },
  created () {
    // bind router (绑定路由)
    const routes = this.mainMenu.find(item => item.path === '/')
    this.menus = (routes && routes.children) || []

    // 处理侧栏收起状态
    this.$watch('collapsed', () => {
      this.$store.commit(SIDEBAR_TYPE, this.collapsed)
    })
    this.$watch('isMobile', () => {
      this.$store.commit(TOGGLE_MOBILE_TYPE, this.isMobile)
    })
  },
  mounted () {
    const userAgent = navigator.userAgent
    if (userAgent.indexOf('Edge') > -1) {
      this.$nextTick(() => {
        this.collapsed = !this.collapsed
        setTimeout(() => {
          this.collapsed = !this.collapsed
        }, 16)
      })
    }

    // first update color
    // THEME COLOR HANDLER!! PLEASE CHECK THAT!!
    if (process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === 'true') {
      updateTheme(this.primaryColor)
    }
    //  first update color weak
    if (this.colorWeak) {
      updateColorWeak(this.colorWeak)
    }
  },
  methods: {
    i18nRender,
    handleCollapse (val) {
      this.collapsed = val
    },
    handleMediaQuery (val) {
      this.query = val
      if (this.isMobile && !val['screen-xs']) {
        this.$store.commit(TOGGLE_MOBILE_TYPE, false)
        return
      }
      if (!this.isMobile && val['screen-xs']) {
        this.$store.commit(TOGGLE_MOBILE_TYPE, true)
        this.collapsed = false
        this.$store.commit(TOGGLE_CONTENT_WIDTH, CONTENT_WIDTH_TYPE.Fluid)
      }
    },
    /**
     * 同步和保存设置栏配置
     * */
    handleSettingChange ({ type, value }) {
      console.log('type', type, value)
      switch (type) {
        case 'contentWidth':
          this.$store.commit(TOGGLE_CONTENT_WIDTH, value)
          break
        case 'primaryColor':
          this.$store.commit(TOGGLE_COLOR, value)
          break
        case 'layout':
          this.$store.commit(TOGGLE_LAYOUT, value)
          if (value === 'sidemenu') {
            this.$store.commit(TOGGLE_CONTENT_WIDTH, CONTENT_WIDTH_TYPE.Fluid)
          } else {
            this.$store.commit(TOGGLE_CONTENT_WIDTH, CONTENT_WIDTH_TYPE.Fixed)
            this.$store.commit(TOGGLE_FIXED_SIDEBAR, false)
          }
          break
        case 'theme':
          this.$store.commit(TOGGLE_NAV_THEME, value)
          break
        case 'fixedHeader':
          this.$store.commit(TOGGLE_FIXED_HEADER, value)
          break
        case 'fixSiderbar':
          this.$store.commit(TOGGLE_FIXED_SIDEBAR, value)
          break
        case 'colorWeak':
          this.$store.commit(TOGGLE_WEAK, value)
          break
      }
    },
  },
  components: {
    RightContent,
    GlobalFooter,
    SettingDrawer,
  },
}
</script>

<style lang="less">
@import "./BasicLayout.less";
</style>
