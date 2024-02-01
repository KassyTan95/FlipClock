import { ElectronAPI } from '@electron-toolkit/preload'
import { IgnoreMouseEventsOptions } from 'electron'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      setIgnoreMouseEvents: (ignore: boolean, options?: IgnoreMouseEventsOptions) => void
      setTopping: (isTop: boolean) => void
      setAutomaticStartup: (op: boolean) => void
      setDockHide: (isHide: boolean) => void
      platform: () => string
      getVersion: () => string
    }
  }
}
