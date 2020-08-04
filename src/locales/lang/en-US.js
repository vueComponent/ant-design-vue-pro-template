import exceptionLang from '@/views/exception/locales/enUS'

export default {
  navBar: {
    lang: 'Language',
  },
  layouts: {
    usermenu: {
      dialog: {
        title: 'Log out',
        content: 'Do you want log out',
      },
    },
  },
  menu: {
    home: 'Home',
    dashboard: {
      default: 'Dashboard',
      welcome: 'Welcome',
      workplace: 'Workplace',
    },
    form: {
      default: 'Form',
      basicform: 'Basic Form',
      stepform: 'Step Form',
      advancedform: 'Advanced Form',
    },
    nav1: 'Nav 1',
    nav2: 'Nav 2',
    nav3: 'Nav 3',
  },

  pages: {
    dashboard: {
      welcome: {
        tips: 'Welcome used Ant Design Vue',
        'show-loading': 'Show Loading',
        'hide-loading': 'Hide Loading',
      },
    },
    form: {
      basicform: {
        headers: {
          btn1: 'Button1',
          customTitle: 'Custom Page Title',
        },
        content: 'Form pages are used to collect or verify information to users, and basic forms are common in scenarios where there are fewer data items.',
        tabs: {
          tab1: 'Tab1',
          tab2: 'Tab2',
          tab3: 'Tab3',
        },
      },
    },
  },

  'navBar.lang': 'Language',

  'app.setting.pagestyle': 'Page style setting',
  'app.setting.pagestyle.light': 'Light style',
  'app.setting.pagestyle.dark': 'Dark style',
  'app.setting.pagestyle.realdark': 'RealDark style',
  'app.setting.themecolor': 'Theme Color',
  'app.setting.navigationmode': 'Navigation Mode',
  'app.setting.content-width': 'Content Width',
  'app.setting.fixedheader': 'Fixed Header',
  'app.setting.fixedsidebar': 'Fixed Sidebar',
  'app.setting.sidemenu': 'Side Menu Layout',
  'app.setting.topmenu': 'Top Menu Layout',
  'app.setting.content-width.fixed': 'Fixed',
  'app.setting.content-width.fluid': 'Fluid',
  'app.setting.othersettings': 'Other Settings',
  'app.setting.weakmode': 'Weak Mode',
  'app.setting.copy': 'Copy Setting',
  'app.setting.loading': 'Loading theme',
  'app.setting.copyinfo': 'copy success，please replace defaultSettings in src/models/setting.js',
  'app.setting.production.hint': 'Setting panel shows in development environment only, please manually modify',

  ...exceptionLang,
}
