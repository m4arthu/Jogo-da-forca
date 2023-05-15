import React, { useState } from "react"
import Jogo from "./Jogo.js"
import Letras from "./Letras.js"
import Teclado from "./Teclado.js"


function App() {
  const [abbled, setabble] = useState("disabled")
  const [disabledButton, disabled] = useState("abbled")
  const [erros, seterro] = useState(0)
  const [palavra, setPalavra] = useState([])
  const [primeiraRender, setVez] = useState(true)
  const [palavra2, setPalavra2] = useState([])
  const [gamestatus, setGameStatus] = useState("")
  const [jogardenovo, setjogardenovo] = useState(false)
  return (
    <React.Fragment>
      <div className="jogo-container">
        <Jogo jogardenovo={jogardenovo} setjogardenovo={setjogardenovo} Setabble={setabble} gamestatus={gamestatus} setGameStatus={setGameStatus} setVez={setVez} erros={erros} seterro={seterro} setPalavra2={setPalavra2} setPalavra={setPalavra}  button={disabledButton} disabled={disabled} />
        <Letras jogardenovo={jogardenovo} setGameStatus={setGameStatus}  gamestatus={gamestatus} disable={disabled} disabledButton={disabledButton} palavra2={palavra2} primeiraRender={primeiraRender} setVez={setVez} palavra={palavra} />
      </div>
      <Teclado gamestatus={gamestatus} jogardenovo={jogardenovo} setjogardenovo={setjogardenovo} disable={disabled} setGameStatus={setGameStatus} primeiraRender={primeiraRender} palavra2 ={palavra2} setPalavra2={setPalavra2} setVez={setVez} palavra={palavra} erros={erros} setErro={seterro} habilitado={abbled} />
    </React.Fragment>
  )
}

export default App



