import exceptionLang from '@/views/exception/locales/zhCN'

export default {
  navBar: {
    lang: '语言',
  },
  layouts: {
    usermenu: {
      dialog: {
        title: '注销',
        content: '要注销账户吗?',
      },
    },
  },
  menu: {
    home: '首页',
    dashboard: {
      default: '仪表盘',
      welcome: '欢迎',
      workplace: '工作台',
    },
    form: {
      default: '表单页',
      basicform: '基础表单',
      stepform: '分步表单',
      advancedform: '高级表单',
    },
    nav1: '导航1',
    nav2: '导航2',
    nav3: '导航3',
  },

  pages: {
    dashboard: {
      welcome: {
        tips: '欢迎使用 Ant Design Vue',
        'show-loading': '显示 Loading',
        'hide-loading': '隐藏 Loading',
      },
    },
    form: {
      basicform: {
        headers: {
          btn1: '按钮1',
          customTitle: '自定义标题',
        },
        content: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
        tabs: {
          tab1: '标签1',
          tab2: '标签2',
          tab3: '标签3',
        },
      },
    },
  },

  // page locales
  ...exceptionLang,
}
