import React from 'react'

const Cards = ({ item }) => {
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={item.image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>Description of title</p>
                    <div className="card-actions justify-end">
                        <h5><span>$</span>{item.price}</h5>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards