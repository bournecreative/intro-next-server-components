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
            <h3>{snippets.title}</h3>
            <code>
                <pre>
                    {snippets.code}
                </pre>
            </code>
        </div>
    )
}