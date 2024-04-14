import React from "react";

// tentando fazer um componente exclusivo para as setas, mas sem sucesso. Pág. 77 do livro.

const SetasOrdenacao = (props) => {

    <div className="container-setinhas">
        <div onClick={ () => props.ordenarCrescente() }>&#129093;</div>
        <div onClick={ () => props.ordenarDecrescente() }>&#129095;</div>
    </div>

}

export default SetasOrdenacao;