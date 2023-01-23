import React from "react";
import Content from "../../components/layout/Content";
import Menu from "../../components/layout/Menu";
import './App.css'

export default function App(props){
    return (
        <div className="App">
            <Menu></Menu>
            <Content></Content>
        </div>
    )
}