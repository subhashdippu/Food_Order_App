import React from 'react'

const Banner = () => {
    return (
        <div className="section-cotainer bg-gradient-to-r from-indigo-500 from-0% to-100%">
            <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="md:w-1/2 space-y-8 px-4">
                    <h2 className="md:text-5xl text-4xl font-bold md:leading-sung leading-sung">Get the tastiest <span className="text-blue">food</span> ever</h2>
                    <p className='text-xl text-[#4A4A4A'>where each bite gives the taste of India Spices</p>
                    <button className='btn bg-blue px-8 py-4 font-semibold text-white rounded-full'>Order Now</button>
                </div>
                <div className="md:w-1/2">
                    <img src="/image/img1.png" alt="" className="rounded-2xl" />
                    <div className="flex flex-col md:flex-row  items-center justify-around -mt-14">
                        <div className="sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-4 shadow-md w-20">
                            <img src='/image/img2.png' alt="" className="rounded-2xl" />
                        </div>
                        <div className="space-y-1">
                            <h5 className="font-medium mb-1">xyz meal</h5>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className="text-red">$78.00</p>
                        </div>
                        <div className="sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-4 shadow-md w-20">
                            <img src='/image/img3.png' alt="" className="rounded-2xl" />
                        </div>
                        <div className="space-y-1">
                            <h5 className="font-medium mb-1">xyz meal</h5>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className="text-red">$78.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner