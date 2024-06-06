import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import Cards from './Cards';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        >
            NEXT
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        >
            BACK
        </div>
    );
};


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
        slidesToShow: 3,
        slidesToScroll: 3,
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
        ],
        nextArror: <simpleNextArrow />,
        prevArror: <simplePrevArrow />
    };
    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 my-20 relative">
            <div className='text-left'>
                <p className='subtitle'>special dishes</p>
                <h2 className='title'>Enjoy delicious meals like never before</h2>
            </div>
            <div className="md:absolute right-3 top-8 mb-10 md:mr-24">
                <button onClick={() => slider?.current?.slickPrev()}
                    className=" btn p-2 rounded-full ml-5"
                >
                    <FaAngleLeft className=" h-8 w-8 p-1" />
                </button>
                <button
                    className="bg-green btn p-2 rounded-full ml-5"
                    onClick={() => slider?.current?.slickNext()}
                >
                    <FaAngleRight className=" h-8 w-8 p-1" />
                </button>
            </div>

            <Slider ref={slider} {...settings} className="overflow-hidden mt-10 space-x-5">
                {recipies.map((item, i) => (
                    <Cards item={item} key={i} />
                ))}
            </Slider>
        </div>
    );
};


export default SpecialDishes