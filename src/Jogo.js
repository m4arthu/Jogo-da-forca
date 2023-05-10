import React from "react"
const imgs = ["./assets/forca0.png"]

function Jogo(props) {
    return (
        <React.Fragment>
            <div className="jogo-container">
                <img src={imgs[0]} alt={imgs[0]}></img>
                <button onClick={props.escolherPalavra}>Escolher Palavra</button>
            </div>
        </React.Fragment>
    )

}

export default Jogo