import { dialog } from 'electron'
import { autoUpdater } from 'electron-updater'

const sleep = async (ms: number): Promise<boolean> => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve(true)
      clearTimeout(timer)
    }, ms)
  })
}

const autoUpdateApp = async (): Promise<void> => {
  await sleep(3000)

  autoUpdater.autoDownload = false
  // 应用退出后自动安装
  autoUpdater.autoInstallOnAppQuit = true
  autoUpdater.disableWebInstaller = false

  // 检测更新
  autoUpdater.checkForUpdates()

  // 监听'error'事件
  autoUpdater.on('error', (error) => {
    console.log(error)
  })

  // 监听'update-available'事件，发现有新版本时触发
  autoUpdater.on('update-available', () => {
    console.log('有新版本需要更新')
    autoUpdater.downloadUpdate()
  })

  console.log('1111111111', 1111111111)
  // 监听'update-not-available'事件，没有更新时触发
  autoUpdater.on('update-not-available', () => {
    console.log('没有可用更新')
  })

  // 监听'update-downloaded'事件，新版本下载完成时触发
  autoUpdater.on('update-downloaded', () => {
    dialog
      .showMessageBox({
        type: 'info',
        title: '应用更新',
        message: '发现新版本，是否更新？',
        buttons: ['更新', '取消']
      })
      .then((buttonIndex) => {
        if (buttonIndex.response === 0) {
          autoUpdater.quitAndInstall(true, true)
        }
      })
  })
}

export default autoUpdateApp
