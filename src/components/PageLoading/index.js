import PageLoading from './PageLoading'
const version = '0.0.1'
const loading = {}

loading.newInstance = (Vue, options) => {
  let loadingElement = document.querySelector('body>div[type=loading]')
  if (!loadingElement) {
    loadingElement = document.createElement('div')
    loadingElement.setAttribute('type', 'loading')
    loadingElement.setAttribute('class', 'ant-loading-wrapper')
    document.body.appendChild(loadingElement)
  }

  const props = Object.assign({ visible: false, size: 'large', tip: 'Loading...' }, options)
  const instance = new Vue({
    data () {
      return {
        ...props,
      }
    },
    render (h) {
      const { tip } = this
      const props = {}
      this.tip && (props.tip = tip)
      if (this.visible) {
        return h('page-loading', {
          props,
        })
      }
      return null
    },
    components: {
      [PageLoading.name]: PageLoading,
    },
  }).$mount(loadingElement)

  function update (config) {
    const { visible, size, tip } = { ...props, ...config }
    instance.$set(instance, 'visible', visible)
    if (tip) {
      instance.$set(instance, 'tip', tip)
    }
    if (size) {
      instance.$set(instance, 'size', size)
    }
  }

  return {
    instance,
    update,
  }
}

const api = {
  show: function (options) {
    this.instance.update({ ...options, visible: true })
  },
  hide: function () {
    this.instance.update({ visible: false })
  },
}

const install = function (Vue, options) {
  if (Vue.prototype.$loading) {
    return
  }
  api.instance = loading.newInstance(Vue, options)
  Vue.prototype.$loading = api
}

export default {
  version,
  install,
}
