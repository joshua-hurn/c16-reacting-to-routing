import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

const SinglePerson = () => {
    const [person, setPerson] = useState({});
    const { personid } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://ghibliapi.herokuapp.com/people/${personid}`);
                const person = await res.json();
                setPerson(person)
            } catch (error) {
                console.log(error)
            }
        })() //iife
    }, [personid]);

    return (
        <div className="container">
            <div className='row justify-content-center'>
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

                        <button onClick={() => navigate(-1)} className="btn btn-primary btn-sm">Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePerson