import './App.css'
import { useState } from 'react'

function App() {
  
  // mauvaise pratique
  // let prenom = "David"
  // let nom = "Wils"

  // Bonne Pratique
  const [prenom, setPrenom] = useState("David")

  const [nom, setNom] = useState("WILS")

  const [age, setAge] = useState(38)

  function changePrenomNom(){
    setPrenom("Mathieu")
    setNom("Dupont")
  }

  function augmenteAge(){
    setAge(age + 1)
  }
  function diminuerAge(){
    setAge(age - 1)
  }
  

  return (
    <>
      <h1>Bonjour {prenom} {nom}</h1>
      <button onClick={changePrenomNom}>Change le prénom et le nom</button>
      <h2>Vous Avez {age} ans</h2>
      <button onClick={augmenteAge}>+</button>
      <button onClick={diminuerAge}>-</button>
    </>
  )
}

export default App
