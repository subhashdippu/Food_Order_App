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
        <div className="section-container">
            <div className="text-center py-8">

                <p className="subtitle">
                    Customer favourites</p>
                <h2 className="title">Populer Categories</h2>

                <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-around items-center">
                    {
                        categoriesItems.map((items, i) => (
                            <div key={i}>
                                <div>
                                    <img src={items.image} alt="" className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28" />
                                </div>
                                <div>
                                    <h5>{items.title}</h5>
                                    <p>{items.des}</p>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories