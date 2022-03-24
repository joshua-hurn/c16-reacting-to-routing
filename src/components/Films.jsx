import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => setFilms(films))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className='container'>
            <h1 className='ml-3'>Films of Studio Ghibli</h1>

            <div className='row justify-content-center'>
                {films.map(film => (
                    <div className="card film-card m-3 p-0" key={film.id}>
                        <img src={film.movie_banner} alt={`banner for ${film.title}`} className="card-img-top" height="161px" width="260px" />
                        <div className="card-body">
                            <h5 className="card-title">{film.title}</h5>
                            <p className="card-text">{film.description}</p>
                            <Link to={`/films/${film.id}`} className="btn btn-primary btn-sm">See More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Films