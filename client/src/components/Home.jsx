import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DogCard from './DogCard';
import DogSearch from './DogSearch';
import { useDispatch } from 'react-redux';
import { getPaginationServer } from '../redux/actions';
import { Link } from 'react-router-dom';

import '../styles/home.css';

const Home = () => {

    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(3)
    const [pagina, setPagina] = useState();

    const paginado = useSelector(state => state.pagination);

    useEffect(() => {
        setPagina(paginado);
    }, [paginado]);
    // 
    const dispatch = useDispatch();
    console.log(paginado);

    const handleBackwards = () => {
        let resta = page - 1;
        if (resta < 0) { resta = 0 }
        setPage(
            resta
        )
        dispatch(getPaginationServer(page, limit));
    }

    const handleForewards = () => {
        let suma = page + 1;
        setPage(
            suma
        )
        dispatch(getPaginationServer(page, limit));
    }

    const handleLimit = (e) => {
        let lmt = e.target.value;
        if (lmt < 1) { lmt = 1 }
        setLimit(lmt)
    }

    const handleSortForewards = () => {
        console.log('sort');
        let array = pagina;
        array.sort(function (a, b) {
            if (a.nombre > b.nombre) {
                return 1;
            }
            if (a.nombre < b.nombre) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

        setPagina(array);

    }

    const handleSortBackwards = () => {

    }


    return (
        <div>
            <input type="button" value="<<<" onClick={handleBackwards} />
            <input type="button" value=">>>" onClick={handleForewards} />
            <input type="number" defaultValue={3} onClick={(e) => { handleLimit(e) }} />
            <input type="button" value="A-Z" onClick={handleSortForewards} />
            <input type="button" value="Z-A" onClick={handleSortBackwards} />

            <div className="homeComponent">

                {pagina ? pagina.map((pagina, index) => {
                    return (
                        <Link key={index} to={`/details/${pagina.id}`}>
                            <DogCard
                                key={index}
                                id={pagina.id}
                                image={pagina.image}
                                name={pagina.nombre}
                                temperament="Ocioso.."
                            />
                        </Link>
                    )
                }) : null}
            </div>
            <DogSearch />
            </div>
    );
}

export default Home;
