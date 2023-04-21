import { useEffect, useState } from "react"
import "./App.css"

import { getRandomFact } from "./services/facts"

const PREFIX_IMG = "https://cataas.com"

export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    getRandomFact().then((fact) => setFact(fact))
  }, [])

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(" ", 3).join(" ")

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)
      .then((response) => response.json())
      .then((data) => {
        const { url } = data
        setImageUrl(url)
      })
  }, [fact])

  const handleGetNewFact = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>Kitty App</h1>

      <button onClick={handleGetNewFact}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`${PREFIX_IMG}${imageUrl}`}
          alt={`Image of a cat saying ${fact}`}
        />
      )}
    </main>
  )
}
