import { NavLink } from 'react-router-dom';
import '../styles/navBar.css';

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navBarList">
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/razas" activeClassName="active">Incluir Razas</NavLink>
                </li>
            </ul>

            </div>
        </div>
    );
}

export default NavBar;
