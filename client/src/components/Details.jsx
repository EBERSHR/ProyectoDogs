import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getId } from '../redux/actions';
import { useHistory } from 'react-router-dom';  

import '../styles/details.css'


const Details = () => {
    // let id = 45;
    let { id } = useParams();
    console.log(typeof id);

    const details = useSelector(state => state.details);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getId(id))
    }, [id, dispatch]);

    console.log('DETAILS:::', details);

    const goBack = () => {
        history.goBack();
    }

    return details ? (
        <div>
            <input type="button" onClick={goBack}/>
            <div>
                {details.nombre}
            </div>
            <div className="detailsImage">
                <img src={details.image} alt="nombre del perro" />
            </div>

            <div>
                {details.id}
            </div>
        </div>
    ) : (<div></div>);
}

export default Details;
