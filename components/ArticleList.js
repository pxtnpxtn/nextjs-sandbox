import React from 'react'
import Article from './Article'

function ArticleList({articles}) {
    return (
        <div>
            {articles.map((article) => (
                <Article key={article.id} article={article}/>
            ))}
        </div>
    )
}

export default ArticleList
