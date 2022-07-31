import React, {useState} from 'react';


const MovieDisplay = (props) => {
    const [rating, setRating] = useState(0);


    const handleChange = (e) => {
        setRating(Number(e.currentTarget.value));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addRating(props.id, rating);
        setRating(0);
    }

    return (
        <div id="movie1" className="movie-rating">
            <h2>{props.name}</h2>
            <p><img src={props.img} alt={props.name} /></p>
            <form>     
                    <input value={rating} type="number" onChange={handleChange} />
                    <button onClick={handleSubmit}>Submit</button>
            </form>
            <p>Current rating is {props.value} from {props.length} votes</p>
        </div>
    )
}

export default MovieDisplay;