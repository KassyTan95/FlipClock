import { IgnoreMouseEventsOptions, contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  setIgnoreMouseEvents: (ignore: boolean, options?: IgnoreMouseEventsOptions): void => {
    ipcRenderer.send('setIgnoreMouseEvents', ignore, options)
  },
  setTopping: (isTop: boolean): void => {
    ipcRenderer.send('setTopping', isTop)
  },
  setAutomaticStartup: (op: boolean): void => {
    ipcRenderer.send('setAutomaticStartup', op)
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
