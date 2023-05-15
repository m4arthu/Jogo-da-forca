import React, { useState } from "react"
const letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
function Letra(props) {
    var [disabled, setabble] = useState("abbled")
    var [palavra2, setpalavra2] = useState(props.traços)
    const [mudarpalavra2, setmudar] = useState(true)
    if (props.jogardenovo) {
        if(mudarpalavra2){
            palavra2 = props.traços
            setmudar(false)
        }
        disabled = "abbled"
    }
    if (props.disabled === "disabled") {
        return (
            <button data-test="letter" disabled className={`teclado-letra disabled`}>
                {props.value}
            </button>
        )
    } else {

        return (
            <button data-test="letter" onClick={() => {
                if (disabled !== "disabled") {
                    setabble("disabled")
                    disabled = "disabled"
                    if(typeof(palavra2) === "string"){
                        setpalavra2(props.traços)
                    } else {
                        props.palavra.forEach(letra => {
                            if (palavra2.indexOf(letra) === -1) {
                                setpalavra2(...palavra2.splice(props.palavra.indexOf(letra), 1, "_"))
                            }
                        });
                    }    
                    props.setVez(false)
                    if (props.erros < 5) {
                        if(typeof(palavra2) === "string" || palavra2 === []){
                            setpalavra2(props.traços)
                        } else {
                            if (props.palavra.indexOf(props.value) !== -1) {
                                for (let i = 0; i < props.palavra.length; i++) {
                                    if (props.palavra[i] === props.value){
                                        setpalavra2(...palavra2.splice(i, 1, props.value))
                                    }
                                }
                                let newpalavra2 = [...palavra2]
                                props.setPalavra2(newpalavra2)
                            } else {
                                props.palavra.forEach(letra => {
                                    if (palavra2.indexOf(letra) === -1) {
                                        setpalavra2(...palavra2.splice(props.palavra.indexOf(letra), 1, "_"))
                                    }
                                })
                                let newpalavra2 = [...palavra2]
                                props.setPalavra2(newpalavra2)
                                props.setErro(props.erros + 1)
                            }
                        }
                    } else {
                        props.setErro(props.erros + 1)
                        props.setPalavra2(palavra2)
                        props.setGameStatus("perdeu")
                        props.disable("abbled")
                    }
                }
            }} className={props.primeiraRender ? `teclado-letra abbled` : `teclado-letra ${disabled}`}>
                {props.value}
            </button>
        )
    }

}

function Teclado(props) {
    let traços = []
    for (let i = 0; i < props.palavra.length; i++) {
        traços.push("_")
    }
    return (
        <React.Fragment>
            <div className="teclado-space">
                <div className="teclado-container">
                    {letras.map((l, index = letras.indexOf(l)) => <Letra gamestatus={props.gamestatus} setjogardenovo={props.setjogardenovo} jogardenovo={props.jogardenovo} traços={traços} disable={props.disable} setGameStatus={props.setGameStatus} primeiraRender={props.primeiraRender} palavra2={props.palavra2} setPalavra2={props.setPalavra2} setVez={props.setVez} palavra={props.palavra} erros={props.erros} setErro={props.setErro} key={index} value={l} disabled={props.habilitado} />)}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Teclado
