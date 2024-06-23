'use client'

import type { Snippet } from "@prisma/client" 
import { Editor } from "@monaco-editor/react"
import { useState } from "react"

interface SnippetEditEditor {
    snippet: Snippet
}

export default function SnippetEditEditor({snippet}: SnippetEditEditor){

    const [code, setCode] = useState("")

    const handleEditorChange = (value: string = "") => {
    
    }

    return (
        <div>
            Editor Page
            <div>
                <form>
                    <Editor
                        height={"40vh"}
                        theme="vs-dark"
                        language="javascript"
                        defaultValue={snippet.code}
                        options={
                            {minimap: {enabled: false}}
                        }
                        onChange={handleEditorChange}
                    />
                </form>
            </div>
        </div>
    )
}