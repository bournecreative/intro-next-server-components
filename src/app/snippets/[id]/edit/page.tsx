import { notFound } from 'next/navigation'
import { db } from '@/db'

interface SnippetEditProps {
    params: {
        id: string
    }
}

export default async function SnippetEdit(props: SnippetEditProps) {
    const id = parseInt(props.params.id)

    const currentSnippet = await db.snippet.findFirst({
        where: { id: id }
    })

    if (!currentSnippet) {
        return notFound()
    }

    return (
        <div>
            Edit page for {id }
        </div>
    )
}