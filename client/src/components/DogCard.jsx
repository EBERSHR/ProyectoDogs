import React from 'react';
import '../styles/card.css';
// import { useHistory } from 'react-router-dom';  

const DogCard = (props) => {

    return (
        <div className="cardComponent">
            <div>
                {props.name}
            </div>
            <div className="cardImage">
            <img src={props.image} alt="nombre del perro" />
            {/* <img src={props.image} alt="nombre del perro" onClick={(handleOnClick)}/> */}
            </div>

            <div>
                {props.temperament}
            </div>

        </div>
    );
}

export default DogCard;
