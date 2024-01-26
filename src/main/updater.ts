import { app, dialog } from 'electron'
import { autoUpdater } from 'electron-updater'

const autoUpdateApp = (): void => {
  // 检测更新
  autoUpdater.checkForUpdates()

  // 监听'error'事件
  autoUpdater.on('error', (err) => {
    console.log(err)
  })

  // 监听'update-available'事件，发现有新版本时触发
  autoUpdater.on('update-available', () => {
    console.log('found new version')
  })

  // 监听'update-downloaded'事件，新版本下载完成时触发
  autoUpdater.on('update-downloaded', () => {
    dialog
      .showMessageBox({
        type: 'info',
        title: '应用更新',
        message: '发现新版本，是否更新？',
        buttons: ['是', '否']
      })
      .then((buttonIndex) => {
        if (buttonIndex.response === 0) {
          autoUpdater.quitAndInstall()
          app.quit()
        }
      })
  })
}

export default autoUpdateApp
