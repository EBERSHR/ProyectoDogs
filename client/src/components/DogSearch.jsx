import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAll } from '../redux/actions';


const DogSearch = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
    }, [dispatch]);

    const dogs = useSelector(state => state.allDogs);

    const [busqueda, setBusqueda] = useState();

    const handleOnChangex = (e) => {
        setBusqueda(e.target.value);
    }

    return (
        <div>
        <div>
            <input type="text" onChange={(e) => {handleOnChangex(e)}}/>
        </div>
        <div>
            {dogs ? dogs.map(element => {
                if (element.nombre.includes(busqueda)) {
                    return (
                        <Link key={element.id} to={`/details/${element.id}`}>
                        <div key={element.id}>{element.nombre}</div>
                        </Link>
                    )
                }
            }): null}
        </div>
        <div></div>
        </div>
    );
}

export default DogSearch;
