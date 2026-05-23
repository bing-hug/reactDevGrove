declare module '@/utils/react-ueditor-wrap' {
  import { ComponentType } from 'react'

  interface EditorConfig {
    serverUrl?: string
    UEDITOR_HOME_URL?: string
    UEDITOR_CORS_URL?: string
    initialFrameWidth?: string | number
    initialFrameHeight?: string | number
    [key: string]: unknown
  }

  interface RcUeditorProps {
    value?: string
    onChange?: (value: string) => void
    onBlur?: (value: string) => void
    ueditorUrl?: string
    ueditorConfigUrl?: string
    ueditorHomeUrl?: string
    ueditorIframeUrl?: string
    editorConfig?: EditorConfig
    className?: string
    prefix?: string
    getEditorInstance?: (editor: unknown) => void
  }

  const RcUeditor: ComponentType<RcUeditorProps>
  export default RcUeditor
}
