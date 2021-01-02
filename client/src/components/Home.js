import React, { useEffect } from 'react';
import '../styles/home.css';

// testing
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// testing carousel
import img2 from '../assets/images/img2.jpeg';
import img4 from '../assets/images/img4.jpeg';
import img5 from '../assets/images/img5.jpeg';
import img6 from '../assets/images/img6.jpeg';
import img7 from '../assets/images/img7.jpeg';
import Slider from 'react-slick';

function Home(props){
    useEffect(() => {
        props.showSearchHandler(false);
        props.changeNavColor("inherit")
    }, [])
    const images = [img2,  img4, img5, img6, img7];
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <div className="container" >
            <Slider {...settings}>
                {images.map((image, index) => {
                return(
                    <div className="picture" key={index}>
                        <img  className="images" key={index} src={image} alt="" />
                        <div className="description">Hello</div>
                    </div>
                )
                })}
            </Slider>
        </div>
    )
}

export default Home;