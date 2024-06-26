'use server'

import { redirect } from 'next/navigation'
import { db } from '@/db'

export async function editSnippet(id: number, code: string) {
    await db.snippet.update({
        where: { id: id },
        data: { code: code }
    })

    redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id: number) {
    await db.snippet.delete({
        where: {id: id}
    })

    redirect('/')
}


