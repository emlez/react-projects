import "./App.css"
import { useCatFact } from "./hooks/useCatFact"
import { useCatImage } from "./hooks/useCatImage"
// import { Another } from "./Components/Another"

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleGetNewFact = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Kitty App</h1>

      <button onClick={handleGetNewFact}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image of a cat saying ${fact}`} />}

      {/* <Another /> */}
    </main>
  )
}
