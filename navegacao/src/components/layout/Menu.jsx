import React from "react";
import './Menu.css'

import { Link } from 'react-router-dom'

export default function Menu(props){
    return (
            <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Inicio</Link>
                    </li>

                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                </ul>
            </nav>
            </aside>
    )
}