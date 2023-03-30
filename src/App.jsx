import { useState } from 'react'


import { HeaderComponent } from "./Components/Header"
import { ImageResults } from "./Components/Image-result"

function App() {
  const [listImages, setListImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  console.log(listImages)
  return (
    <div>
     <HeaderComponent setListImages={setListImages} setIsLoading={setIsLoading}/>
     <ImageResults listImages={listImages} isLoading={isLoading}/>
    </div>
  )
}

export default App
