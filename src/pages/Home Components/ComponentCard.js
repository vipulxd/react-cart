import React from 'react';
import '../../styles/ComponentCard.css'
const ComponentCard = (props) => {
    return ( 
        <div className="componentcard">
            <img className="componentcard-image" src={props.image} alt="watch"/>
            <h2 className="componentcard-name">{props.name}</h2>
            <p className="componentcard-tagline">{props.tagline}</p>
            <p className="componentcard-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></p>
            <h2 className="componentcard-price">${props.price}</h2>
        </div>
     );
}
 
export default ComponentCard;