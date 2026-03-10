<template>
  <div
    class="regular-layout"
    :style="{ padding: boxPadding }"
    v-loading="loading"
    ref="layoutRef"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  mainScroll: {
    type: Boolean,
    default: true
  },
  boxPadding: {
    type: String,
    default: '0px'
  },
  loading: {
    type: Boolean,
    default: false
  }
})

defineExpose({})
</script>

<style lang="scss" scoped>
.regular-layout {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
