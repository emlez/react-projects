import { useCatImage } from "../hooks/useCatImage"

export function Another() {
  const { imageUrl } = useCatImage({ fact: "angry cat" })

  return (
    <>
      {imageUrl && <img src={imageUrl} alt={`Image of a cat saying ${fact}`} />}
    </>
  )
}
