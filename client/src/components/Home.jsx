import DogSearch from './DogSearch';
import Pagination from './Pagination';

import '../styles/home.css';


const Home = () => {

    return (
        <div className="homeComponent">
            <div className="homePaginationSpace">
                <Pagination />
            </div>
            <div className="homeDogSearchSpace">
                <DogSearch />
            </div>
        </div>
    );
}

export default Home;
