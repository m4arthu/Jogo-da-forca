import React from "react"
import palavras from "./palavras.js"
const imgs =
    ["./assets/forca0.png", "./assets/forca1.png",
        "./assets/forca2.png", "./assets/forca3.png",
        "./assets/forca4.png", "./assets/forca5.png",
        "./assets/forca6.png"]

function Jogo(props) {
    function click() {
        
        let ramdom = Math.floor(Math.random() * palavras.length)
        let arrayPlavra = []
        for (let i = 0; i < palavras[ramdom].length; i++) {
            arrayPlavra.push(palavras[ramdom][i])
        }
        props.Setabble("abbled")
        props.disabled("disabled")
        props.setPalavra(arrayPlavra)
        console.log(palavras[ramdom])

    }
    return (
        <React.Fragment>
            <img data-test="game-image"src={imgs[props.erros]} alt={`forca${props.erros}`}></img>
            {props.button === "abbled" ?
                <button data-test="choose-word" onClick={() => {
                    document.querySelectorAll(".teclado-letra").forEach((letra)=>{
                        letra.classList.add("abbled")
                        letra.classList.remove("disabled")
                        letra.removeAttribute("disabled")
                    })
                    if (props.gamestatus !== "") {
                        let ramdom = Math.floor(Math.random() * palavras.length)
                        let arrayPlavra = []
                        for (let i = 0; i < palavras[ramdom].length; i++) {
                            arrayPlavra.push(palavras[ramdom][i])
                        }
                        props.setVez(true)
                        props.seterro(0)
                        props.setjogardenovo(true)
                        props.setGameStatus("")
                        props.setPalavra2([])
                        props.setPalavra(arrayPlavra)
                        console.log(palavras[ramdom])
                    } else {
                        click()
                    }
                }}>Escolher Palavra
                </button> : <button disabled >Escolher Palavra</button>}
        </React.Fragment>
    )

}

export default Jogo