<template>
  <page-container
    :tab-list="tabList"
    :tab-active-key="tabActiveKey"
    :tab-change="(key) => {
      this.tabActiveKey = key
      console.log('PageHeader::tabChange', key)
    }"
    :breadcrumb="customBreadcrumb"
  >
    <template v-slot:content>
      <span>{{ $t('pages.form.basicform.content') }}</span>
    </template>
    <!-- 自定义 扩展信息 -->
    <template v-slot:extra>
      <div><a-button>{{ $t('pages.form.basicform.headers.btn1') }}</a-button></div>
    </template>
    <div>
      <h3>Step Form</h3>
      <p>隐藏页头后退按钮</p>
    </div>
  </page-container>
</template>

<script>
export default {
  name: 'StepForm',
  data () {
    return {
      console: window.console,
      tabList: [
        { tab: 'pages.form.basicform.tabs.tab1', key: 'tab1' },
        { tab: 'pages.form.basicform.tabs.tab2', key: 'tab2' },
        { tab: 'pages.form.basicform.tabs.tab3', key: 'tab3' },
      ],
      tabActiveKey: 'tab1',
    }
  },
  computed: {
    customBreadcrumb () {
      return {
        props: {
          routes: this.$route.matched.concat().map(route => {
            return {
              path: route.path,
              breadcrumbName: this.$t(route.meta.title),
            }
          }),
          itemRender: ({ route, params, routes, paths, h }) => {
            return routes.indexOf(route) === routes.length - 1 && (
              <span>{route.breadcrumbName}</span>
          ) || (
            <router-link to={{ path: route.path || '/' }}>{route.breadcrumbName}</router-link>
          )
          },
        },
      }
    },
  },
  methods: {
    handleTabChange (key) {
      this.tabActiveKey = key
      console.log('PageHeader::tabChange', key)
    },
  },
}
</script>
