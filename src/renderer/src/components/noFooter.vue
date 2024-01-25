<script lang="ts" setup>
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
  <main
    class="flex items-center justify-center w-full p-2 mt-2 text-center text-transparent rounded-md hover:bg-red-400 hover:text-white">
    <div class="flex items-center text-[18px] cursor-pointer" @click="toggle">
      <AlarmClock v-if="config.clock.type == 'timing'" />
      <Time v-else />
    </div>
    <div class="ml-4 cursor-pointer">
      <RouterLink v-if="$route.name == 'clock'" :to="{ name: 'config' }">配置</RouterLink>
      <RouterLink v-else :to="{ name: 'clock' }">时钟</RouterLink>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
