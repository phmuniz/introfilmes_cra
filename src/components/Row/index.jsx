import "./style.css"

function Row(props){

    return(
        <div>

            <div className="films-row">
                {props.children}
            </div>

            <div>
                
            </div>
        </div>
    );
}

export default Row;