import React from "react";
import IntroImg from "../../assets/img-intro.png";
import './style.css';

function Intro(){

    return(
        <div id="intro">

            <div id="intro-text">
                <p>INTRO<strong>FILMES</strong></p>
                Uma plataforma de filmes e séries desenvolvida utilizando conceitos de React.
            </div>
            
            <div id="intro-img">
                <img src={IntroImg}></img>
            </div>
            
        </div>
    );
}

export default Intro;