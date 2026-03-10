<template>
  <span class="icon-placeholder" :style="{ fontSize: size + 'px' }" @click="$emit('click')">
    <template v-if="icon">▪</template>
  </span>
</template>

<script lang="ts" setup>
defineProps({
  icon: {
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 16
  }
})
defineEmits(['click'])
</script>

<style lang="scss" scoped>
.icon-placeholder {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: inherit;
}
</style>
