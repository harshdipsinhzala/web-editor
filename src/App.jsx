import { useRef } from 'react'
import Editor from "@monaco-editor/react"
import * as Y from "yjs"
import { WebrtcProvider } from "y-webrtc"
import { MonacoBinding } from "y-monaco"



function App() {
  const editorRef = useRef(null);

  

  // eslint-disable-next-line no-unused-vars
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    
    const doc = new Y.Doc(); 
    const provider = new WebrtcProvider("test-room", doc); 
    const type = doc.getText("monaco");  
    
    // eslint-disable-next-line no-unused-vars
    const binding = new MonacoBinding(type, editorRef.current.getModel(), new Set([editorRef.current]), provider.awareness);
    console.log(provider.awareness);                
  }

  return (
    <Editor
      height="100vh"
      width="100vw"
      theme="vs-dark"
      onMount={handleEditorDidMount}
    />
  )
}

export default App
