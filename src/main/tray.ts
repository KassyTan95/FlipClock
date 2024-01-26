import { Menu, Tray, shell } from 'electron'
import path from 'path'

const createTray = (): void => {
  const tray = new Tray(
    path.resolve(
      __dirname,
      process.platform === 'darwin' ? '../../resources/trayTemplate@2x.png' : '../../resources/windowTray.png'
    )
  )
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '关于',
      click: (): void => {
        shell.openExternal('https://git.kassy.cc:999/kassy/FlipClock')
      }
    },
    { label: '退出', role: 'quit' }
  ])
  tray.setToolTip('翻转时钟')
  tray.setContextMenu(contextMenu)
}

export default createTray
