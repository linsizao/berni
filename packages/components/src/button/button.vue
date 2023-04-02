<template>
  <button class="ea-button" :class="buttonStyle">
    <slot />
  </button>
  <Tag>Tag 1</Tag>
</template>

<script lang="ts" setup>
  import './style/index.less'
  import { Tag } from 'ant-design-vue'
  import { computed } from 'vue'

  defineOptions({ name: 'ea-button' })
  type ButtonProps = {
    type?: string
    size?: string
  }
  const buttonProps = defineProps<ButtonProps>()

  const buttonStyle = computed(() => {
    return { [`ea-button--${buttonProps.type}`]: buttonProps.type }
  })
</script>
