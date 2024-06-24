'use client'

import type { Snippet } from "@prisma/client" 
import { Editor } from "@monaco-editor/react"
import { useState } from "react"
import { editSnippet } from "@/actions/index"

interface SnippetEditFormProps {
    snippet: Snippet
}

export default function SnippetEditForm({snippet}: SnippetEditFormProps){
    const [code, setCode] = useState(snippet.code)

    const editAction = editSnippet.bind(null, snippet.id, code)

    const handleEditorChange = (val: string = '') => {
        setCode(val)
    }

    return (
        <div>
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
            <form action={editAction}>
                <button type='submit' className="p-2 border rounded">Save</button>
            </form>
        </div>
    )
}