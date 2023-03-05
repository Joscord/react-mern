import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import ArticlesList from './components/stateful/ArticlesList'
import Footer from './components/stateless/Footer'
import Navbar from './components/stateless/Navbar'

function App() {
  const [bitcoinArticles, setBitcoinArticles] = useState([])
  const fetchData = async () => {
    const endpoint = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=594fd65e60414aeaaf3dc1690ef90a5d"
    const response = await axios.get(endpoint)
    const { articles } = response.data 
    console.log(articles)
    setBitcoinArticles(articles)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <ArticlesList articles={bitcoinArticles}/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
