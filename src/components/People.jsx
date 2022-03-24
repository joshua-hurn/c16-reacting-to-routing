import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people => setPeople(people))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className='container'>
            <h1>People of Studio Ghibli</h1>

            <div className='row'>
                {people.map(person => (
                    <div className="card film-card m-3 p-0" key={person.id}>
                        <div className="card-body">
                            <h5 className="card-title">
                                <span className="text-muted">Name: </span>
                                {person.name}
                            </h5>
                            <h5 className="card-title">
                                <span className="text-muted">Gender: </span>
                                {person.gender}
                            </h5>
                            <h5 className="card-title">
                                <span className="text-muted">Age: </span>
                                {person.age}
                            </h5>
                            <h5 className="card-title">
                                <span className="text-muted">Eye Color: </span>
                                {person.eye_color}
                            </h5>
                            
                            <Link to={`/people/${person.id}`} className="btn btn-primary btn-sm">See More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default People