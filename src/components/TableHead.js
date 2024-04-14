import React from "react";
import TableHeadArrows from "./TableHeadArrows";

const TableHead = (props) =>
(
    <thead>
        <tr>
            <th colSpan="4">
                Tabela de Livros
            </th>
        </tr>
        <tr>
            <th>ISBN
                <TableHeadArrows 
                    ordenarCrescente={props.ordenarCrescente }
                    ordenarDecrescente={props.ordenarDecrescente }
                    headType="isbn"
                />
            </th>
            <th>Título 
                <TableHeadArrows 
                    ordenarCrescente={props.ordenarCrescente }
                    ordenarDecrescente={props.ordenarDecrescente }
                    headType="titulo"
                />
            {/* TableHeadArrows is a component child of TableHead. 
            This the replace the code in comments below */}
                
                {/* <div className="container-setinhas">
                    <div onClick={ () => props.ordenarCrescente() }>&#129093;</div>
                    <div onClick={ () => props.ordenarDecrescente() }>&#129095;</div>
                </div> */}

            </th>
            <th>Autor
            <TableHeadArrows 
                ordenarCrescente={props.ordenarCrescente }
                ordenarDecrescente={props.ordenarDecrescente }
                headType="autor"
            />
            </th>
            <th></th>
        </tr>
    </thead>
);

export default TableHead;