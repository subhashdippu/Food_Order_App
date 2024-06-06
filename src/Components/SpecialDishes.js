import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import Cards from './Cards';
const SpecialDishes = () => {
    const [recipies, setRecipies] = useState([])
    const slider = React.useRef(null)

    useEffect(() => {
        fetch("/menu.json")
            .then((res) => res.json())
            .then((data) => {
                const specials = data.filter((item) => item.category === "popular")
                setRecipies(specials)
            });
    }, []);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="section-cotainer my-20">

            <div className="text-lefft ">
                <p className="subtitle">
                    Special Dishes</p>
                <h2 className="title md:w-[520px]">Enjoy delicious meals like never before</h2>
            </div>


            <Slider {...settings}>
                {recipies.map((item, i) => (
                    <Cards key={i} item={item} />
                ))}
            </Slider>
        </div>


    )
}

export default SpecialDishes