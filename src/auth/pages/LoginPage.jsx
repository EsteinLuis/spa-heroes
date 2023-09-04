import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/index.js";

export const LoginPage = () => {

    const {login} = useContext( AuthContext )
    const navigate = useNavigate();
    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        login('Luis Castaneda');

        navigate(lastPath, {
            replace: true
        });
    };

    return(
       <div className="container ,t-5">
           <h1>Login Page</h1>
           <hr />
           <button
               className="btn btn-primary"
               onClick={ handleLogin }
               >
               Log in
           </button>
       </div>
    )
}