import './style.css';

function Film(props){

    var img

    if(props.imgSrc != ''){
        img = <img src={props.imgSrc} className="picture__img"></img>;
    }

    return(

        <div className="film">
            {img}
        </div>
    );
}

export default Film;