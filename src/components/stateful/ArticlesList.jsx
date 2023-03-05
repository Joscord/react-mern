import React from 'react'
import Article from './Article'

const ArticlesList = ({articles}) => {
  return (
    <ul className='row'>
        {
            articles && articles.map(article => (
                <li key={article.description} className="col">
                    <Article article={article}/>
                </li>
            ))
        }
    </ul>
  )
}

export default ArticlesList