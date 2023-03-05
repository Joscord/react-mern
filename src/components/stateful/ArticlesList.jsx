import React from 'react'
import Article from './Article'

const ArticlesList = ({articles}) => {
  return (
    <ul>
        {
            articles && articles.map(article => (
                <Article article={article}/>
            ))
        }
    </ul>
  )
}

export default ArticlesList