import React from 'react'

const Categories = () => {
    const categoriesItems = [
        { id: 1, title: "Break fast", des: "{23 dishes}", image: "image/img1.png" },
        { id: 2, title: "Break fast", des: "{23 dishes}", image: "image/img2.png" },
        { id: 3, title: "Break fast", des: "{23 dishes}", image: "image/img3.png" },
        { id: 4, title: "Break fast", des: "{23 dishes}", image: "image/img4.png" },
        { id: 5, title: "Break fast", des: "{23 dishes}", image: "image/img2.png" }
    ]
    return (
        <div className="section-container py-8">
            <div className="text-center ">
                <p className="subtitle">
                    Customer favourites</p>
                <h2 className="title">Populer Categories</h2>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-around items-center mt-12">
                {
                    categoriesItems.map((items, i) => (
                        <div key={i} className="shadow-lg rounded-md bg-white py-6 p-x-5 w-70 mx-auto text-center cursor-pointer hover: -translate-y-6 duration-300">
                            <div className="flex w-full mx-auto items-center justify-center">
                                <img src={items.image} alt="" className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28" />
                            </div>
                            <div className="mt-5 space-y-1">
                                <h5>{items.title}</h5>
                                <p>{items.des}</p>
                            </div>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}

export default Categories