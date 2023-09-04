import { Link, NavLink, useNavigate } from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../../auth/index.js";


export const Navbar = () => {

    const {user, logout} = useContext( AuthContext ); //Para sacar informacion del Context, se pone el AuthContext que es donde hemos guardado la info.
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login', {replace: true,});
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({isActive}) => `nav-item nav-link${isActive ? ' active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({isActive}) => `nav-item nav-link${isActive ? ' active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({isActive}) => `nav-item nav-link${isActive ? ' active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>

                    {/*<NavLink*/}
                    {/*    className={({isActive}) => `nav-item nav-link${isActive ? ' active' : ''}`}*/}
                    {/*    to="/hero"*/}
                    {/*>*/}
                    {/*    Hero*/}
                    {/*</NavLink>*/}
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        {user?.name}
                    </span>
                    <button
                        className="nav-item nav-link text-danger btn"
                        onClick={handleLogout}
                        >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}