import React from 'react';
import '../../styles/Slider.css'
import data from "../../components/Data/data.json";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Slider = (props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="slider">
            <h1 className="slider-head">Latest Products at Glance!</h1>
            <Carousel 
                responsive={responsive}
                autoPlaySpeed={1000}
            >
                {data.map((product)=>(
                    <div className="slider-card">
                        <img className="slider-image" src={product.imageurl} />
                        <button className="slider-button">View</button>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Slider;