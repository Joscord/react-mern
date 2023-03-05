import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import ArticlesList from './components/stateful/ArticlesList'
import Footer from './components/stateless/Footer'
import Navbar from './components/stateless/Navbar'

const App = () => {
  const [bitcoinArticles, setBitcoinArticles] = useState([])
  const fetchData = async () => {
    const endpoint = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${import.meta.env.VITE_API_KEY}`
    const response = await axios.get(endpoint)
    const { articles } = response.data 
    setBitcoinArticles(articles)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        {!(bitcoinArticles.length > 0) && <div>Loading...</div>}
        <ArticlesList articles={bitcoinArticles}/>
      </div>
      <Footer>Soy Footer</Footer>
    </div>
  )
}

export default App
