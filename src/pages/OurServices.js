import React from 'react'


const servicesList = [
    {
        id: 1, title: "catering",
        des: "ugfjhdaslkh hsauudhf sahfkl ifsadhi hsdfh isfh",
        image: "/image/img1.png"
    },
    {
        id: 2, title: "catering",
        des: "ugfjhdaslkh hsauudhf sahfkl ifsadhi hsdfh isfh",
        image: "/image/img2.png"
    },
    {
        id: 3, title: "catering",
        des: "ugfjhdaslkh hsauudhf sahfkl ifsadhi hsdfh isfh",
        image: "/image/img3.png"
    },
    {
        id: 4, title: "catering",
        des: "ugfjhdaslkh hsauudhf sahfkl ifsadhi hsdfh isfh",
        image: "/image/img4.png"
    },

]
const OurServices = () => {
    return (
        <div className="section-container my-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                <div className="md:w-1/2">
                    <div className="text-left md:w-4/5">
                        <p className="subtitle">OurServices</p>
                        <h2 className="title">Checkout our services</h2>
                        <p className="my-5 text-secondary leading-[30px]">
                            Loremdsfdsugfkljhkhdkj jgusfhajk mnxbcugdsf sdjhfd snbdjsfgdubf mdsajhfhsahbdfjbsduvb nbj sdfjgsdfbmdufesf b
                        </p>
                        <button className="btn bg-blue text-white px-8 py-3 rounded-full">Explore</button>

                    </div>
                </div>
                <div className=" md:w-1/2">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 item-center">
                        {
                            servicesList.map((services) => (
                                <div key={services.id}
                                    className="shadow-md rounded-sm py-5 px-5 text-center space-y-2 text-blue cursor-pointer hover: border-indigo-600 translate-all duration-200 hover:border"
                                >
                                    <img src={services.image} alt="" className="mx-auto" />
                                    <h5 className="pr-3 font-semibold">{services.title}</h5>
                                    <p className="text-[#90BD95]">{services.des}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices