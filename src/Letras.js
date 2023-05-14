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
        for (let i = 0; i < props.palavra.length; i++) {
            palavra.push("_")
        }
    } else {
        for (let i = 0; i < props.palavra2.length; i++) {
            palavra.push(props.palavra2[i])
        }
        if (palavra.indexOf("_") === -1) {
            const habilitados = window.document.querySelectorAll(".abbled")
            if(props.gamestatus !== "") {
                habilitados.forEach((Element)=>{
                    Element.classList.remove("abbled")
                    Element.classList.add("disabled")
                    Element.setAttribute("disabled","")
                })
            }
            setTimeout(()=>{
                props.disable("abbled")
            },100)
            color = "green"
        } else if (props.gamestatus === "perdeu") {
            color = "red"
            palavra = props.palavra
        }

    }

    return (
        <React.Fragment>
            <div className="palavra">
                {palavra.map((l, index = props.palavra.indexOf(l)) => <Letra key={index} gamestatus={props.gamestatus} palavra={palavra} palavra2={props.palavra2} color={color} value={l} />)}
            </div>
        </React.Fragment>
    )
}

export default Letras