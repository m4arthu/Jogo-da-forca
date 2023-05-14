import React, { useState } from "react"
const letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
function Letra(props) {
    const [disabled, setabble] = useState("abbled")
    const [palavra2, setpalavra2] = useState(props.traços)
    if (props.disabled === "disabled") {
        return (
            <button disabled className={`teclado-letra disabled`}>
                {props.value}
            </button>
        )
    } else {

        return (
            <button onClick={() => {
                if (disabled !== "disabled") {
                    setabble("disabled")
                    props.palavra.forEach(letra => {
                        if (palavra2.indexOf(letra) === -1) {
                            setpalavra2(...palavra2.splice(props.palavra.indexOf(letra), 1, "_"))
                        }
                    });
                    props.setVez(false)
                    if (props.erros < 5) {
                        if (props.palavra.indexOf(props.value) !== -1) {
                            for (let i = 0; i < props.palavra.length; i++) {
                                if (props.palavra[i] === props.value) {
                                    setpalavra2(...palavra2.splice(i, 1, props.value))
                                }
                            }
                            const newpalavra2 = [...palavra2]
                            props.setPalavra2(newpalavra2)
                        } else {
                            props.setErro(props.erros + 1)
                        }
                    } else {
                        const habilitados = window.document.querySelectorAll(".abbled")
                        habilitados.forEach((Element) => {
                            Element.classList.remove("abbled")
                            Element.classList.add("disabled")
                            Element.setAttribute("disabled", "")
                        })
                        console.log(habilitados)
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
    var traços = []
    for (let i = 0; i < props.palavra.length; i++) {
        traços.push("_")
    }
    return (
        <React.Fragment>
            <div className="teclado-space">
                <div className="teclado-container">
                    {letras.map((l, index = letras.indexOf(l)) => <Letra traços={traços} disable={props.disable} setGameStatus={props.setGameStatus} primeiraRender={props.primeiraRender} palavra2={props.palavra2} setPalavra2={props.setPalavra2} setVez={props.setVez} palavra={props.palavra} erros={props.erros} setErro={props.setErro} key={index} value={l} disabled={props.habilitado} />)}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Teclado