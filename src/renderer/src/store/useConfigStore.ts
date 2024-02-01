import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ConfigType } from '@renderer/types/global'

export const useConfigStore = defineStore(
  'config',
  () => {
    const config = ref<ConfigType>({
      clock: {
        bgColor: '#ccc',
        color: '#000',
        type: 'clock',
        mode: 'normal',
        offTime: '',
        timing: {
          hour: 0,
          minute: 0,
          second: 0
        },
        isTop: true,
        autoStart: false,
        dockHide: false
      },
      footer: {
        bgColor: '#16a085',
        color: '#fff',
        content: '',
        isShow: true
      },
      oneWord: {
        content: '',
        time: ''
      }
    })

    return {
      config
    }
  },
  { persist: true }
)
