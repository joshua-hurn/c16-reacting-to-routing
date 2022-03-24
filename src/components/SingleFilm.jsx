import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

const SingleFilm = () => {
    const [film, setFilm] = useState({});
    const { filmid } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then(res => res.json())
            .then(film => setFilm(film))
            .catch(err => console.log(err))
    }, [filmid]);

    return (
        <div className="container">
            <div className='row justify-content-center'>
                <div className="card single-film-card m-3 p-0" key={film.id}>
                    <img src={film.movie_banner} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{film.title}</h5>
                        <h4 className='card-title'>{film.original_title}</h4>
                        <h5 className='card-title'>{film.director}</h5>
                        <p className="card-text">{film.description}</p>
                        <button onClick={() => navigate(-1)} className="btn btn-primary btn-sm">Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleFilm