import React from "react"

function Letra(props) {
    return (
        <p className={props.color}>
            {props.value}
        </p>
    )
}

function Letras(props) {
    var color = ""
    let palavra = []
    if (props.primeiraRender === true) {
        palavra = []
        for (let i = 0; i < props.palavra.length; i++) {
            palavra.push("_")
        }
    } else {
        for (let i = 0; i < props.palavra2.length; i++) {
            palavra.push(props.palavra2[i])
        }
        if (palavra.indexOf("_") === -1) {
            const habilitados = window.document.querySelectorAll(".abbled")
                habilitados.forEach((Element)=>{
                    Element.classList.remove("abbled")
                    Element.classList.add("disabled")
                    Element.setAttribute("disabled","")
                })
            setTimeout(()=>{
                props.setGameStatus("venceu")
                props.disable("abbled")
            },100)
            color = "green"
        } else if (props.gamestatus === "perdeu") {
            const habilitados = window.document.querySelectorAll(".abbled")
            habilitados.forEach((Element) => {
                Element.classList.remove("abbled")
                Element.classList.add("disabled")
                Element.setAttribute("disabled", "")
            })
            color = "red"
            palavra = props.palavra
        }

    }

    return (
        <React.Fragment>
            <div data-test="word" className="palavra">
                {palavra.map((l, index = props.palavra.indexOf(l)) => <Letra key={index} setGameStatus={props.setGameStatus} gamestatus={props.gamestatus} palavra={palavra} palavra2={props.palavra2} color={color} value={l} />)}
            </div>
        </React.Fragment>
    )
}

export default Letras