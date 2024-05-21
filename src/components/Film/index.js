import React from "react";
import './style.css';

function Film(props){

    return(

        <div className="film">
            <img src={props.imgSrc} className="picture__img"></img>
        </div>
    );
}

export default Film;