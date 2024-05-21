import React, {useState} from "react";
import "./style.css";
import ImgFilm1 from "../../assets/static1.jpeg";
import ImgFilm2 from "../../assets/static2.jpg";
import ImgFilm3 from "../../assets/static3.webp";
import ImgFilm4 from "../../assets/static4.jpg";
import Row from "../Row";
import Film from "../Film";

function Catalog(){

    const film1 = {name: 'O REI LEÃO',
        imgSrc: ImgFilm1,
        description: 'Este desenho animado da Disney mostra as aventuras de um leão jovem de nome Simba, o herdeiro de seu pai, Mufasa. O tio malvado de Simba, Oscar, planeja roubar o trono de Mufasa atraindo pai e filho para uma emboscada. Simba consegue escapar e somente Mufasa morre. Com a ajuda de seus amigos,Timon e Pumba, ele reaparece como adulto para recuperar sua terra, que foi roubada por seu tio Oscar.',
        rating: 4,
        year: 1994,
        id: 1
    };

    const film2 = {name: 'ENROLADOS',
        imgSrc: ImgFilm2,
        description: 'O bandido mais procurado do reino, Flynn Rider, se esconde em uma torre e acaba prisioneiro de Rapunzel, residente de longa data do local. Dona de cabelos dourados e mágicos com 21 metros de comprimento, ela está trancada há anos e deseja desesperadamente a liberdade. A adolescente determinada faz um acordo com o rapaz, e, juntos, partem para uma aventura emocionante.',
        rating: 5,
        year: 2014,
        id: 2
    };

    const film3 = {name: 'TOY STORY',
        imgSrc: ImgFilm3,
        description: 'O aniversário do garoto Andy está chegando e seus brinquedos ficam nervosos, temendo que ele ganhe novos brinquedos que possam substituí-los. Liderados pelo caubói Woody, o brinquedo predileto de Andy, eles recebem Buzz Lightyear, o boneco de um patrulheiro espacial, que logo passa a receber mais atenção do garoto.',
        rating: 5,
        year: 2004,
        id: 3
    };

    const film4 = {name: 'NO WAY HOME',
        imgSrc: ImgFilm4,
        description: 'Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. Quando um feitiço para reverter o evento não sai como o esperado, o Homem-Aranha e seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso.',
        rating: 5,
        year: 2021,
        id: 4
    };

    const [numRows, setNumRows] = useState(0);
    const [films, setFilms] = useState([film1, film2, film3, film4]);


    const listFilms =
        <Row>
            {films.map(film => 
                <Film key={film.id} imgSrc={film.imgSrc}></Film>
            )}
        </Row>

    return(

        <div className="catalog">

            <h1>CATÁLOGO</h1>

            {listFilms}

        </div>
    );
}

export default Catalog;