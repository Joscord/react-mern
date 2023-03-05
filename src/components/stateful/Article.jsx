import React, {useState} from 'react'
import Card from '../stateless/Card'
import Modal from './Modal'

const Article = ({article}) => {
  const {title, author, urlToImage, url, description, content} = article
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    console.log("running show modal")
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

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
            <button onClick={showModal} className="card-link">See more</button>
        </div>
        {isModalOpen && <Modal content={content} closeModal={closeModal}/>}
    </Card>
  )
}

export default Article