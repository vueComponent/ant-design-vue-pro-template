<template>
  <div :style="loadingStyle">
    <a-spin :size="size" :style="spinStyle" :tip="tip" />
  </div>
</template>

<script>
import 'ant-design-vue/es/spin/style'
import Spin from 'ant-design-vue/es/spin'

const loadingStyle = {
  textAlign: 'center',
  background: 'rgba(0,0,0,0.6)',
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1100,
}
const spinStyle = {
  position: 'absolute',
  left: '50%',
  top: '40%',
  transform: 'translate(-50%, -50%)',
}

export default {
  name: 'PageLoading',
  props: {
    tip: {
      type: String,
      default: 'Loading..',
    },
    size: {
      type: String,
      default: 'large',
    },
  },
  data () {
    this.loadingStyle = loadingStyle
    this.spinStyle = spinStyle
    return {
      visible: false,
    }
  },
  components: {
    [Spin.name]: Spin,
  },
}
</script>
