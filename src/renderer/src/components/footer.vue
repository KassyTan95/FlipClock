<script setup lang="ts">
import { useConfigStore } from '@renderer/store/useConfigStore'
import Navbar from '@renderer/components/Navbar.vue'
import { hitokoto } from '@renderer/api'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import dayjs from 'dayjs'

const { config } = useConfigStore()
const timer = ref<NodeJS.Timeout | null>(null)

const getData = async (): Promise<void> => {
  const res = await hitokoto({ encode: 'json', min_length: 4, max_length: 15 })
  config.oneWord.content = res.hitokoto
  config.oneWord.time = dayjs().format('YYYY-MM-DD HH:mm:ss')
  setTimer()
}

const setTimer = (): void => {
  timer.value = setInterval(() => {
    if (dayjs(config.oneWord.time).diff(dayjs(), 'second') >= 1800) {
      getData()
    }
  }, 1000)
}

onMounted(() => {
  getData()
})

onBeforeUnmount(() => {
  timer.value && clearInterval(timer.value)
})
</script>

<template>
  <main
    class="flex items-center justify-between w-full px-2 mt-2 text-center text-white rounded-md drag"
    :style="{ backgroundColor: config.footer.bgColor, color: config.footer.color }">
    <div class="text-sm run">
      {{ config.footer.content ? config.footer.content : config.oneWord.content }}
    </div>
    <Navbar class="" />
  </main>
</template>

<style lang="scss" scoped>
main {
  user-select: none;
  // color: white;
  // display: flex;
  // justify-content: center;
  // align-items: center;
}
.run {
  animation: identifier 10s infinite both;
}
@keyframes identifier {
  from {
    transform: translateX(0);
  }
  50% {
    transform: translateX(calc(230px - 100%));
  }
  to {
    transform: translateX(0);
  }
}
</style>
