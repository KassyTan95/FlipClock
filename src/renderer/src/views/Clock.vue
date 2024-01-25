<script setup lang="ts">
import FlipClock from '@renderer/composables/FlipClock'
import { onMounted, watch } from 'vue'
import '@renderer/assets/flipClock.scss'
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()
const instance = new FlipClock({ el: '#clock', ...config.clock })
watch(
  () => config.clock.type,
  () => {
    instance
      .destroy()
      .config({ el: '#clock', ...config.clock })
      .render()
  }
)
onMounted(() => {
  instance.render()
})

// 刷新倒计时
const refresh = (): void => {
  if (config.clock.type == 'clock') return
  instance
    .destroy()
    .config({ el: '#clock', ...config.clock })
    .render()
}
</script>

<template>
  <main>
    <div
      id="clock"
      :style="{
        '--bgColor': config.clock.bgColor,
        '--color': config.clock.color
      }"
      @dblclick="refresh" />
  </main>
</template>

<style lang="scss">
:root {
  // --bgColor: red;
  // --width: 35px;
  // --color: #fff;
}
</style>
