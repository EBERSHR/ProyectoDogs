import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPaginationServer } from '../redux/actions';
import { Link } from 'react-router-dom';
import DogCard from './DogCard';


const Pagination = () => {
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(3)
    const [pagina, setPagina] = useState();

    const paginado = useSelector(state => state.pagination);
    const dispatch = useDispatch();

    useEffect(() => {
        setPagina(paginado);
    }, [paginado]);
    
    const handleBackwards = () => {
        let resta = page - 1;
        if (resta < 0) { resta = 0 }
        setPage(
            resta
        )
        dispatch(getPaginationServer(resta, limit));
    }

    const handleLimit = (e) => {
        let lmt = e.target.value;
        if (lmt < 1) { lmt = 1 }
        setLimit(lmt);
        dispatch(getPaginationServer(page, lmt));
    }

    const handleForewards = () => {
        let suma = page + 1;
        setPage(
            suma
        )
        dispatch(getPaginationServer(suma, limit));
    }

    return (
        <div>
            <input type="button" value="<<<" onClick={handleBackwards} />
            <input type="button" value=">>>" onClick={handleForewards} />
            <input type="number" min="1" defaultValue={3} onClick={(e) => { handleLimit(e) }} />


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
        </div>
    );
}

export default Pagination;
