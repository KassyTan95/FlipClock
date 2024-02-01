<script setup lang="ts">
import { useConfigStore } from '@renderer/store/useConfigStore'
import { onMounted, ref } from 'vue'

const { config } = useConfigStore()

const platform = ref<string>('')

const handleTop = (val: boolean): void => {
  window.api.setTopping(val)
}
const handleAutoStart = (val: boolean): void => {
  window.api.setAutomaticStartup(val)
}
const handleDockHide = (val: boolean): void => {
  window.api.setDockHide(val)
}
onMounted(() => {
  platform.value = window.api.platform()
})
</script>

<template>
  <main class="p-2 text-white bg-white rounded-lg select-none bg-opacity-60 drag">
    <div class="bg-[#34495e] rounded-lg w-full p-2 h-[500px] overflow-y-auto nodrag">
      <div class="card">
        <h2>系统配置</h2>
        <div class="body">
          <div class="block">
            置顶
            <el-radio-group v-model="config.clock.isTop" size="small" @change="handleTop">
              <el-radio-button :label="true">是</el-radio-button>
              <el-radio-button :label="false">否</el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="body">
          <div class="block">
            开机自启
            <el-radio-group v-model="config.clock.autoStart" size="small" @change="handleAutoStart">
              <el-radio-button :label="true">是</el-radio-button>
              <el-radio-button :label="false">否</el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div v-if="platform === 'darwin'" class="body">
          <div class="block">
            隐藏Dock栏图标
            <el-radio-group v-model="config.clock.dockHide" size="small" @change="handleDockHide">
              <el-radio-button :label="true">是</el-radio-button>
              <el-radio-button :label="false">否</el-radio-button>
            </el-radio-group>
          </div>
        </div>
      </div>
      <div class="card">
        <h2>时钟颜色</h2>
        <div class="body">
          <div class="block">
            背景颜色
            <el-color-picker v-model="config.clock.bgColor" />
          </div>
          <div class="block">
            文字颜色
            <el-color-picker v-model="config.clock.color" />
          </div>
        </div>
      </div>
      <div class="card">
        <h2>倒计时时间</h2>
        <div class="body">
          <div class="block">
            模式
            <el-radio-group v-model="config.clock.mode" size="small" @change="handleTop">
              <el-radio-button label="normal">普通</el-radio-button>
              <el-radio-button label="offWork">下班倒计时</el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div v-if="config.clock.mode === 'normal'" class="body">
          <div class="block">
            时
            <el-input
              v-model="config.clock.timing.hour"
              :min="0"
              :max="100"
              type="number"
              size="small"
              style="width: 60px" />
          </div>
          <div class="block">
            分
            <el-input
              v-model="config.clock.timing.minute"
              :min="0"
              :max="100"
              type="number"
              size="small"
              style="width: 60px" />
          </div>
          <div class="block">
            秒
            <el-input
              v-model="config.clock.timing.second"
              :min="0"
              :max="100"
              type="number"
              size="small"
              style="width: 60px" />
          </div>
        </div>
        <div v-else class="body">
          <div class="block">
            下班时间
            <el-time-picker v-model="config.clock.offTime" value-format="HH:mm:ss" />
          </div>
        </div>
      </div>

      <div class="card">
        <h2>底部信息</h2>
        <div class="body">
          <div class="block">
            文字内容
            <el-input v-model="config.footer.content" />
          </div>
        </div>

        <div class="body">
          <div class="block">
            背景颜色
            <el-color-picker v-model="config.footer.bgColor" />
          </div>
          <div class="block">
            文字颜色
            <el-color-picker v-model="config.footer.color" />
          </div>
        </div>

        <div class="body">
          <div class="block">
            底部内容显示
            <el-radio-group v-model="config.footer.isShow" size="small">
              <el-radio-button :label="true">显示</el-radio-button>
              <el-radio-button :label="false">隐藏</el-radio-button>
            </el-radio-group>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
h2 {
  @apply text-sm opacity-80 font-bold  mb-5 text-center pb-3;
}

.card {
  @apply w-full p-2 rounded-lg mb-2 bg-[#2c3e50];

  .body {
    @apply flex gap-2  p-3 rounded-md;

    .block {
      @apply flex flex-col text-xs gap-2;
      -webkit-app-region: no-drag;
    }
  }
}

.el-popper {
  -webkit-app-region: no-drag;
}
</style>
