import React from 'react'
import Card from '../stateless/Card'

const Article = ({article}) => {
  const {title, author, urlToImage, url, description} = article
  return (
    <Card>
        <img src={urlToImage} className="card-img-top" alt="news-image"/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-title">{author}</h6>
            <p className="card-text">{description}</p>
        </div>
        <div className="card-body">
            <a href={url} className="card-link">Source</a>
            <a href="#" className="card-link">See more</a>
        </div>
    </Card>
  )
}

export default Article