import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2'

const Cards = ({ item }) => {
    const { name, image, price, recipe, _id } = item
    const [isHeartFilled, setHeartFilled] = useState(false)
    const handleHeartClick = () => {
        setHeartFilled(!isHeartFilled)
    }
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = (item) => {
        console.log("add to cart clokced", item);
        if (user && user?.email) {
            const cartItem = {
                menuItemId: _id,
                name,
                quantity: 1,
                image,
                price,
                email: user.email,
            };
            // console.log(cartItem)
            fetch("http://localhost:3001/carts", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(cartItem),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: "top-middle",
                            icon: "success",
                            title: "Item added to the cart",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "Please login...",
                text: "You won't be able to add items to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "SignUp/LogIn"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signup', { state: { form: location } })
                }
            });
        }
    }
    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl relative">
            <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar  bg-blue ${isHeartFilled ? "text-rose-500" : "text-white"}`}
                onClick={handleHeartClick}
            >

                <FaHeart className="h-5 w-5 cursor-pointer" />
            </div>
            <Link to={`/menu${item._id}`}>

                <figure>
                    <img src={item.image}
                        className="hover:scale-105 translate-all duration-200 md:h-32 gap-10"
                    />
                </figure>
            </Link>
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <Link to={`/menu${item._id}`}>

                </Link>

                <p>{item.recipe}</p>
                <div className="card-actions justify-between items-center mt-2">
                    <h5 className="font-semibold">
                        <span className="text-sm text-red">$ </span> {item.price}
                    </h5>
                    <button className="btn btn-primary" onClick={() => handleAddToCart(item)}>Buy Now</button>
                </div>

            </div>
        </div>
    )
}

export default Cards