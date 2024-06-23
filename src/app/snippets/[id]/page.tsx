import { notFound } from "next/navigation"
import { db } from "@/db"

interface SnippetPageProps {
    params: {
        id: string
    }
}
export default async function SnippetShowPage(props: SnippetPageProps) {
    const id = parseInt(props.params.id)
    const snippets = await db.snippet.findFirst({
        where: { id: id}
    })

    if (!snippets) {
        return notFound()
    }

    return (
        <div>
            <div className="flex m-4 justify-between items-center">
                <h1 className="text-xl font-bold">{snippets.title}</h1>
                <div className="flex gap-4">
                    <button className="p-2 border rounded">Edit</button>
                    <button className="p-2 border rounded">Delete</button>
                </div>
            </div>
            <pre className="p-3 border rounded bg-gray-200 border-gray-200">
                <code>{snippets.code}</code>
            </pre>
        </div>
    )
}