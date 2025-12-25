import { useState } from "react"
import "./App.css"

function App() {
  const [title, setTitle] = useState("")
  const [titles, setTitles] = useState([])

  function addTitle() {
    if (!title.trim()) return
    setTitles([...titles, title])
    setTitle("")
  }

  return (
    <div className="container">
      <h1>📁 Media Organizer</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Digite um título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTitle}>Adicionar</button>
      </div>

      <ul>
        {titles.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
