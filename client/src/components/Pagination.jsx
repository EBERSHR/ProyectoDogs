import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPaginationServer } from '../redux/actions';
import { Link } from 'react-router-dom';
import DogCard from './DogCard';


const Pagination = () => {
    const [page, setPage] = useState(0);
    const [otroLimit, setOtroLimit] = useState(8);
    const [limit, setLimit] = useState(8)
    const [pagina, setPagina] = useState();

    const paginado = useSelector(state => state.pagination);
    
    const dispatch = useDispatch();

    useEffect(() => {
        setPagina(paginado);
    }, [paginado]);

    const handleForewards = () => {
        let suma = Number(otroLimit);
        let limite = Number(otroLimit) + Number(limit); 

        console.log(suma, limite);
        if (pagina.length < limit) {
            console.log('ya no hay', limit)
            // dispatch(getPaginationServer(suma - limit, limite - limit));

        } else {
            setOtroLimit(limite)
            setPage(suma)

        }
        console.log('Lenght', pagina.length);
        dispatch(getPaginationServer(suma, limite));

    }
    
    const handleBackwards = () => {
        let resta = page - Number(limit);
        let limite = otroLimit -  Number(limit);
        if (resta < 0) {
            resta = 0;
            limite = Number(limit);
        }
        setPage(resta);
        setOtroLimit(limite);
        console.log(resta, limite)
        dispatch(getPaginationServer(resta, limite));
    }

    const handleLimit = (e) => {
        let lmt = e.target.value;
        if (lmt < 1) { lmt = 1 }
        setLimit(Number(lmt));
        let limite = page + Number(lmt);
        dispatch(getPaginationServer(page, limite));
        console.log(page, limite)
    }



    return (
        <div>
            <input type="button" value="<<<" onClick={handleBackwards} />
            <input type="button" value=">>>" onClick={handleForewards} />
            <input type="number" min="1" max="12" defaultValue={8} onClick={(e) => { handleLimit(e) }} />


            <div className="homeComponent">

                {pagina ? pagina.map((pagina, index) => {
                    return (
                        <Link key={index} to={`/details/${pagina.id}`}>
                            <DogCard
                                key={index}
                                id={pagina.id}
                                image={pagina.image}
                                name={pagina.nombre}
                                temperament={pagina.temperament}
                            />
                        </Link>
                    )
                }) : null}
            </div>
        </div>
    );
}

export default Pagination;
