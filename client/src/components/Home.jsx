import DogSearch from './DogSearch';
import Pagination from './Pagination';

import '../styles/home.css';


const Home = () => {

    return (
        <div>
            <Pagination />
            <DogSearch />
        </div>
    );
}

export default Home;
