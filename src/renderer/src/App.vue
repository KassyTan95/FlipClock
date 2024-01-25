<script setup lang="ts">
// import { Crown } from '@icon-park/vue-next'
import useMouseEvent from '@renderer/composables/useMouseEvent'
import FooterVue from '@renderer/components/footer.vue'
import NoFooter from '@renderer/components/noFooter.vue'
import { useConfigStore } from '@renderer/store/useConfigStore'

const { setIgnoreMouseEvents } = useMouseEvent()
const { config } = useConfigStore()
setIgnoreMouseEvents()
</script>

<template>
  <Suspense>
    <RouterView v-slot="{ Component }">
      <div class="bg-white"></div>
      <div class="">
        <!-- <div class="flex justify-center w-full mb-2 drag">
          <crown theme="outline" size="35" class="text-yellow-400" />
        </div> -->
        <component :is="Component" class="flex flex-col items-center justify-center drag" />
        <FooterVue v-if="config.footer.isShow" />
        <NoFooter v-else />
      </div>
    </RouterView>
  </Suspense>
</template>

<style lang="less"></style>
