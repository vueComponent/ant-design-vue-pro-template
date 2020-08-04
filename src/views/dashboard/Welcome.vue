<template>
  <div>
    <h2>{{ $t('pages.dashboard.welcome.tips') }}</h2>
    <div class="demo-wrapper">
      <a-button @click="showLoading" style="margin-right: 12px;">
        {{ $t('pages.dashboard.welcome.show-loading') }}
      </a-button>
      <a-button @click="hideLoading">
        {{ $t('pages.dashboard.welcome.hide-loading') }}
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage',
  methods: {
    showLoading () {
      this.$loading.show({ tip: '3 秒后自动隐藏' })

      setTimeout(() => {
        this.$loading.hide()
      }, 3000)
    },
    hideLoading () {
      this.$loading.hide()
    },
  },
}
</script>

<style lang="less" scoped>

</style>
