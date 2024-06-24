import Link from 'next/link'
import { notFound } from "next/navigation"
import { db } from "@/db"
import * as actions from '@/actions'

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

    const deleteSnippet = actions.deleteSnippet.bind(null, id)

    if (!snippets) {
        return notFound()
    }

    return (
        <div>
            <div className="flex m-4 justify-between items-center">
                <h1 className="text-xl font-bold">{snippets.title}</h1>
                <div className="flex gap-4">
                    <button className="p-2 border rounded"><Link href={`/snippets/${snippets.id}/edit`}>Edit</Link></button>
                    <form action={deleteSnippet}>
                        <button type="submit" className="p-2 border rounded">Delete</button>
                    </form>
                </div>
            </div>
            <pre className="p-3 border rounded bg-gray-200 border-gray-200">
                <code>{snippets.code}</code>
            </pre>
        </div>
    )
}