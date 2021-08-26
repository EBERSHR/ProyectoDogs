import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAll } from '../redux/actions';


const DogSearch = () => {

    function mapear(){
        return (mapeo ? mapeo.map(element => {
            if (element.nombre.includes(busqueda)) {
                return (
                    <Link key={element.id} to={`/details/${element.id}`}>
                    <div key={element.id}>{element.nombre}</div>
                    </Link>
                )
            } else {return null}
        }): null)
    }

    const [mapeo, setMapeo] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
    }, [dispatch]);

    const dogs = useSelector(state => state.allDogs);

    const [busqueda, setBusqueda] = useState();

    const handleOnChange = (e) => {
        setBusqueda(e.target.value);
        if (e.target.value === "") {setMapeo([])} else {setMapeo(dogs);}
    }

    const handleSortForewards = () => {
        let array = mapeo;
        array.sort(function (a, b) {
            if (a.nombre > b.nombre) {
                return 1;
            }
            if (a.nombre < b.nombre) {
                return -1;
            }
            return 0;
        });
        setMapeo(array);
    }

    const handleSortBackwards = () => {
        let array = mapeo;
        array.sort(function (b, a) {
            if (a.nombre > b.nombre) {
                return 1;
            }
            if (a.nombre < b.nombre) {
                return -1;
            }
            return 0;
        });
        setMapeo(array);
        console.log(mapeo)
    }

    return (
        <div>
        <div>
        <input type="button" value="A-Z" onClick={handleSortForewards} />
        <input type="text" onChange={(e) => {handleOnChange(e)}}/>
            <input type="button" value="Z-A" onClick={handleSortBackwards} />
        </div>
        <div>
            {mapear()}
        </div>
        </div>
    );
}

export default DogSearch;
