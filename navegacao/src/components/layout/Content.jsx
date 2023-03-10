import React from "react";
import './Content.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import NotFound from '../../views/examples/NotFound'


export default function Content(props){
    return (
            <main className="Content">
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/param/:id" element={<Param/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>            
            </main>
            )
}


