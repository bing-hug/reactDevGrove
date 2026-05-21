import RcUeditor from 'react-ueditor-wrap';
import { type FC } from 'react'

interface Props {
    value?: string
    onChange?: (value: string) => void
}

const App:FC<Props> = ({ value = '今天心情怎么样了', onChange }) => {
    return (
        <div className="container">
            <div style={{margin: '0 auto', maxWidth: '800px'}}>
                <RcUeditor
                    value={value}
                    ueditorUrl={'/static/UEditorPlus/ueditor.all.js'}
                    ueditorConfigUrl={'/static/UEditorPlus/ueditor.config.js'}
                    editorConfig={{
                        serverUrl: '',
                        UEDITOR_HOME_URL: '/static/UEditorPlus/',
                        UEDITOR_CORS_URL: '/static/UEditorPlus/',
                        initialFrameWidth: '100%'
                    }}
                    onChange={onChange}/>
            </div>
        </div>
    );
}

export default App;