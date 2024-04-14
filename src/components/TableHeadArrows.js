import React from 'react';

const TableHeadArrows = (props) => {
    return (
        <>
            <div className="container-setinhas">
                <div onClick={ () => props.ordenarCrescente(props.headType) }>&#129093;</div>
                <div onClick={ () => props.ordenarDecrescente(props.headType) }>&#129095;</div>
            </div>
        </>
    );
};

export default TableHeadArrows;