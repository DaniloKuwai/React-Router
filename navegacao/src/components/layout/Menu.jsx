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
                        <Link to="/param/123">Param #01</Link>
                    </li>

                    <li>
                        <Link to="/param/legal">Param #02</Link>
                    </li>

                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>

                    <li>
                        <Link to="/naoExiste">Nao Existe</Link>
                    </li>

                    <li>
                        <Link to="/naoAchei">Nao Achei</Link>
                    </li>
                </ul>
            </nav>
            </aside>
    )
}