<template>
  <a-result status="403" title="403" :sub-title="$t('exception.403.subtitle')">
    <template #extra>
      <a-button type="primary" @click="toHome">
        {{ $t('exception.backhome') }}
      </a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  name: 'Exception403',
  methods: {
    toHome () {
      this.$router.push({ path: '/' })
    },
  },
}
</script>
