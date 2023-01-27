import React from "react";

import { useParams } from 'react-router-dom'

export default function Home(props){

    const { id } = useParams()

    return (
            <div className="Home">
            <h1>Inicio</h1>
            <p>Valor: {id}</p>
            </div>
    )
}