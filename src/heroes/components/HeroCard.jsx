import {Link} from 'react-router-dom';
// import './HeroCard.css';

export const HeroCard = ({
     id,
     superhero,
     publisher,
     alter_ego,
     first_appearance,
     characters,
 }) => {
    const heroImageUrl = `/assets/heroes/${id}.jpg`;
    return (
        // <div className="col">
        //     <div className="card">
        //         <div className="row no-gutters">
        //             <div className="col-4">
        //                 <img src={heroImageUrl} className="card-img" alt={superhero}/>
        //             </div>
        //             <div className="col-8">
        //                 <div className="card-body">
        //                     <h5 className="card-title">{superhero}</h5>
        //                     <p className="card-text">{alter_ego}</p>
        //                     {
        //                         (alter_ego !== characters) && (<p>{characters}</p>)
        //                     }
        //                     <p className="card-text">
        //                         <small className="text-muted">{first_appearance}</small>
        //                     </p>
        //                     <Link to={`/hero/${id}`}>
        //                         Mas...
        //                     </Link>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <Link to={`/hero/${id}`} className="my-card">
            <img src={heroImageUrl} className="img img-responsive animate__animated animate__fadeIn" alt={superhero} />
            <div className="profile-name">{superhero}</div>
            <div className="profile-position">{alter_ego}</div>
            <div className="profile-overview">
                <div className="profile-overview">
                    <div className="row">
                        <div className="col-ms-4">
                            <h3>{publisher}</h3>
                            <p>
                                Primera aparición:
                                <br />
                                {first_appearance}
                            </p>
                            {
                                (alter_ego !== characters)
                                && <p>{characters}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    )
}