import { useState } from 'react'
import './App.css'

function App() {
  const [bitcoinArticles, setBitcoinArticles] = useState(0)
  const fetchData = async () => {
    const endpoint = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=594fd65e60414aeaaf3dc1690ef90a5d"
    const response = axios.get(endpoint)
    const { articles } = response.data 
    setBitcoinArticles(articles)
  }

  return (
    <div className="App">
    </div>
  )
}

export default App
