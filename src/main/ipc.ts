import { BrowserWindow, IgnoreMouseEventsOptions, IpcMainEvent, ipcMain, app } from 'electron'

/**
 * 忽略鼠标事件
 */
ipcMain.on('setIgnoreMouseEvents', (event: IpcMainEvent, ignore: boolean, options?: IgnoreMouseEventsOptions) => {
  // console.log(ignore, options)
  const win = BrowserWindow.fromWebContents(event.sender)
  win?.setIgnoreMouseEvents(ignore, options)
})

/**
 * 设置置顶
 */
ipcMain.on('setTopping', (event: IpcMainEvent, isTop: boolean) => {
  const win = BrowserWindow.fromWebContents(event.sender)
  win?.setAlwaysOnTop(isTop)
})

/**
 * 设置自动启动
 */
ipcMain.on('setAutomaticStartup', (_event: IpcMainEvent, op: boolean) => {
  app.setLoginItemSettings({
    openAtLogin: op
  })
})

/**
 * 设置dock显示隐藏
 */
ipcMain.on('setDockHide', (_, isHide: boolean) => {
  isHide ? app.dock.hide() : app.dock.show()
})
