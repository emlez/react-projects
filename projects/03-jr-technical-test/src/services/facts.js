const ENDPOINT_FACT = "https://catfact.ninja/fact"

export const getRandomFact = async () => {
  const response = await fetch(ENDPOINT_FACT)
  const data = await response.json()
  const { fact: fact_1 } = data
  return fact_1
}