import React, { useEffect, useState } from 'react'
import Cards from '../../Components/Cards';
const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([])
    const [seclectedCategory, setSelectedCategory] = useState("all")
    const [sortOption, setSortOption] = useState("default")


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/menu.json");
                const data = await response.json()
                // console.log(data)
                setMenu(data);
                setFilteredItems(data)
            }
            catch (error) {
                console.log("Error fetching data", error)
            }
        }
        fetchData()
    }, [])


    // Filltering data 
    const filteredItem = (category) => {
        const filtered = category === "all" ? menu : menu.filter((item) => item.category === category);
        setFilteredItems(filtered)
        setSelectedCategory(category)
    }

    // Show data fuction
    const showAll = () => {
        setFilteredItems(menu);
        seclectedCategory("all")

        let sortedItems = [...filteredItem]


        const handleSortChange = (option) => {
            setSortOption(option)
            let sortedItems = [...filteredItem]

            // logic 
            switch (option) {
                case "A-Z":
                    sortedItems.sort((a, b) => a.name.localCompare(b.name))
                    break;
                case "Z-A":
                    sortedItems.sort((a, b) => a.name.localCompare(b.name))
                    break
                case "Low to High":
                    sortedItems.sort((a, b) => a.price - b.price)
                    break;
                case "High to Low":
                    sortedItems.sort((a, b) => b.price - a.price)
                    break;
                default:
                    break;
            }
            setFilteredItems(sortedItems)
        }
    }
    return (
        <div>
            {/* Menu banner */}
            <div className="section-container bg-gradient-to-r from-indigo-500 from-0% to-100%">
                <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Text */}
                    <div className=" text-center space-y-8 px-4">
                        <h2 className="md:text-5xl text-4xl font-bold md:leading-sung leading-sung">Get the tastiest <span className="text-blue">food</span> ever</h2>
                        <p className='text-xl text-[#4A4A4A] md:w-4/5 mx-auto'>where each bite gives the taste of India Spices</p>
                        <button className='btn bg-blue px-8 py-4 font-semibold text-white rounded-full'>Order Now</button>
                    </div>

                </div>
            </div>
            {/* Shop section */}
            <div className="section-container">

                {/* filtering section  */}
                <div>
                    {
                        // buttons for all categories
                        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
                            <button onClick={showAll}>All</button>
                            <button onClick={() => filteredItem("salad")}>Salad</button>
                            <button onClick={() => filteredItem("pizza")}>Pizza</button>
                            <button onClick={() => filteredItem("soup")}>Soups</button>
                            <button onClick={() => filteredItem("desert")}>Deserts</button>
                            <button onClick={() => filteredItem("drinks")}>Drinks</button>
                        </div>
                    }
                </div>



                {/* product card */}
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {
                        filteredItems.map((item) => (
                            <Cards key={item._id} item={item} />
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default Menu