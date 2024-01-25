<script setup lang="ts">
import { AlarmClock, Time } from '@icon-park/vue-next'
import { useConfigStore } from '@renderer/store/useConfigStore'
import { useRouter } from 'vue-router'
const router = useRouter()
const { config } = useConfigStore()

const toggle = (): void => {
  config.clock.type = config.clock.type == 'clock' ? 'timing' : 'clock'
  router.push({ name: 'clock' })
}
</script>

<template>
  <main class="flex items-center justify-between gap-1 py-1 rounded-md nodrag" :style="{ color: config.footer.color }">
    <div @click="toggle">
      <AlarmClock v-if="config.clock.type == 'timing'" theme="outline" size="16" />
      <Time v-else theme="outline" size="16" />
    </div>
    <!-- <span>切换 - {{ config.clock.type }}</span> -->
    <div class="flex gap-2 text-sm opacity-80">
      <RouterLink v-if="$route.name == 'clock'" :to="{ name: 'config' }">配置</RouterLink>
      <RouterLink v-else :to="{ name: 'clock' }">时钟</RouterLink>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  user-select: none;
}
</style>
