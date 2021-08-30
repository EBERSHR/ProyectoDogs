import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getId } from '../redux/actions';
import { useHistory } from 'react-router-dom';  

import '../styles/details.css'


const Details = () => {

    let { id } = useParams();

    const details = useSelector(state => state.details);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getId(id))
    }, [id, dispatch]);

    const goBack = () => {
        history.goBack();
    }

    return details ? (
        <div className="detailComponent">
            <div className="detailsImage">
                <img src={details.image} alt="nombre del perro" />
            </div>
            <div className="detailDetails">
            <input type="button" onClick={goBack}/>
            <div>
                {details.nombre}
            </div>
            <div>
                {details.id}
            </div>
            </div>

            {/* 
 */}
        </div>
    ) : (<div></div>);
}

export default Details;
