import React from "react"
import palavras from "./Palavras"
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
        props.setabble("abbled")
        props.disabled("disabled")
        if (props.gamestatus !== "") {
            props.setGameStatus("")
            setTimeout(()=>{
                click()
            },500)
        } else {
            props.setPalavra(arrayPlavra)
            console.log(palavras[ramdom])
        }
    }
    return (
        <React.Fragment>
            <img src={imgs[props.erros]} alt={`forca${props.erros}`}></img>
            {props.button === "abbled" ?
                <button onClick={() => {
                    click()
                }}>Escolher Palavra
                </button> : <button disabled >Escolher Palavra</button>}
        </React.Fragment>
    )

}

export default Jogo