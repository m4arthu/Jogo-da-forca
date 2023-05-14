import React, { useState } from "react"
import Jogo from "./Jogo"
import Letras from "./Letras"
import Teclado from "./Teclado"


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
        <Letras setGameStatus={setGameStatus}  gamestatus={gamestatus} disable={disabled} disabledButton={disabledButton} palavra2={palavra2} primeiraRender={primeiraRender} setVez={setVez} palavra={palavra} />
      </div>
      <Teclado jogardenovo={jogardenovo} disable={disabled} setGameStatus={setGameStatus} primeiraRender={primeiraRender} palavra2 ={palavra2} setPalavra2={setPalavra2} setVez={setVez} palavra={palavra} erros={erros} setErro={seterro} habilitado={abbled} />
    </React.Fragment>
  )
}

export default App



