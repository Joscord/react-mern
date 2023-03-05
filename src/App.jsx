import { useStatem, useEffect } from 'react'
import './App.css'
import ArticlesList from './components/stateful/ArticlesList'

function App() {
  const [bitcoinArticles, setBitcoinArticles] = useState([])
  const fetchData = async () => {
    const endpoint = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=594fd65e60414aeaaf3dc1690ef90a5d"
    const response = await axios.get(endpoint)
    const { articles } = response.data 
    setBitcoinArticles(articles)
  }

  useState(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <ArticlesList articles={bitcoinArticles}/>
    </div>
  )
}

export default App
