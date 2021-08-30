import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAll } from '../redux/actions';
import '../styles/dogSearch.css'

const DogSearch = () => {

    function mapear() {
        return (mapeo ? mapeo.map(element => {
            if (element.nombre.includes(busqueda)) {
                return (
                    <Link key={element.id} to={`/details/${element.id}`}>
                        <div className="listTile">

                            <div className="listComponentImage">
                                <img className="listImage" src={element.image} alt="nombre del perro" />
                            </div>

                            <div className="liseTitles">
                                <div key={element.id}>{element.nombre}</div>
                                <div>{element.temperament}</div>
                            </div>


                        </div>
                    </Link>
                )
            } else { return null }
        }) : null)
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
        if (e.target.value === "") { setMapeo([]) } else { setMapeo(dogs); }
    }

    //AZ
    const handleSortForewards = () => {
        // let array = mapeo;
        // array.sort(function (a, b) {
        //     if (a.nombre > b.nombre) {
        //         return 1;
        //     }
        //     if (a.nombre < b.nombre) {
        //         return -1;
        //     }
        //     return 0;
        // });
        // setMapeo(array);
        // mapear();
    }

    // ZA
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
    }
    const filtroRaza = () => {
        console.log('Filtro Raza');
    }
    const filtroTemperamento = () => {
        console.log('Filtro Temperamento');
    }

    return (
        <div>
            <div>
                <input type="button" value="A-Z" onClick={handleSortForewards} />
                <input type="text" onChange={(e) => { handleOnChange(e) }} />
                <input type="button" value="Z-A" onClick={handleSortBackwards} />
            </div>

            <div>
                <input type="button" value="Filtar por Raza" onClick={filtroRaza} />
                <input type="button" value="Filtar por Temperamento" onClick={filtroTemperamento} />
            </div>
            <div className="searchListComponent">
                {mapear()}
            </div>
        </div>
    );
}

export default DogSearch;
