<template>
  <a-result status="404" title="404" :sub-title="$t('exception.404.subtitle')">
    <template #extra>
      <a-button type="primary" @click="toHome">
        {{ $t('exception.backhome') }}
      </a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  name: 'Exception404',
  methods: {
    toHome () {
      this.$router.push({ path: '/' })
    },
  },
}
</script>
