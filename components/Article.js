import React from 'react'
import Link from 'next/link'


function Article({article}) {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a href="">
                <h3>{article.title}</h3>
                <p>{article.body}</p>
            </a>
        </Link>
    )
}

export default Article
