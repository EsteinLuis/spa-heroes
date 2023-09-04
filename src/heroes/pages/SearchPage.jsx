import {HeroCard} from "../components";
import {useForm} from "../../hooks/useForm.js";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from 'query-string';
import {getHeroesByName} from "../helpers/index.js";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {q = ''} =queryString.parse(location.search);
    const heroes = getHeroesByName(q);

    const showSearch = (q.length === 0 );
    const showError = (q.length > 0) && heroes.length === 0;

    const { searchText, onInputChange, onResetForm } = useForm({
        searchText: q
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if( searchText.trim().length <= 1 ) return;
        navigate(`?q=${searchText}`);
    }

    return(
        <>
            <h1>Search Page</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={handleSubmit} aria-label="form">
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {/*{*/}
                    {/*    ( q === '' )*/}
                    {/*    ? <div className="alert alert-primary">Search a Hero</div>*/}
                    {/*    : (heroes.length === 0)*/}
                    {/*        &&  <div className="alert alert-danger">No Hero with <b>"{q}"</b> name found</div>*/}
                    {/*}*/}

                    <div className="alert alert-primary animate__animated animate__fadeIn"
                         style={{display: showSearch ? '' : 'none' }}>
                        Search a hero
                    </div>
                    <div className="alert alert-danger animate__animated animate__fadeIn"
                         aria-label="alert-danger"
                         style={{display: showError ? '' : 'none' }}>
                        No Hero with <b>{q}</b> name found
                    </div>

                    {
                        heroes.map( hero => (
                            <small className="me-2" key={hero.id}>
                                <HeroCard { ...hero } />
                            </small>

                        ))
                    }
                </div>
            </div>
        </>

    )
}