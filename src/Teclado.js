import React from "react"

function Letra(props) {
    return (
        <button  className="teclado-letra disabled">
            {props.value}
        </button>
    )
}

function Teclado() {
    const letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <React.Fragment>
            <div className="teclado-space">
                <div className="teclado-container">
                    {letras.map((l) => <Letra key={letras.indexOf(l)} value={l} />)}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Teclado