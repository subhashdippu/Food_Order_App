import React, { useEffect, useState } from 'react'
import Cards from '../../Components/Cards';
import { FaFilter } from 'react-icons/fa'
const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [sortOption, setSortOption] = useState("default")
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); // Number of items to display per page

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
        setSelectedCategory("all")
        setCurrentPage(1);
    }

    const handleSortChange = (option) => {
        setSortOption(option)
        let sortedItems = [...filteredItem]

        // logic 
        switch (option) {
            case "A-Z":
                sortedItems.sort((a, b) => a.name.localeCompare(b.name))
                break;
            case "Z-A":
                sortedItems.sort((a, b) => a.name.localeCompare(b.name))
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
        setCurrentPage(1);
    }
    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
                <div className="flex flex-col md:flex-row flex-wrap justify-between items-centerspace-y-3 mb-6">

                    {/* buttons for all categories */}
                    <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
                        <button
                            onClick={showAll}
                            className={selectedCategory === "all" ? "active" : ""}
                        >
                            All
                        </button>
                        <button onClick={() => filteredItem("salad")} className={selectedCategory === "salad" ? "active" : ""}>Salad</button>
                        <button onClick={() => filteredItem("pizza")} className={selectedCategory === "pizza" ? "active" : ""}>Pizza</button>
                        <button onClick={() => filteredItem("soup")} className={selectedCategory === "soup" ? "active" : ""}>Soups</button>
                        <button onClick={() => filteredItem("desert")} className={selectedCategory === "desert" ? "active" : ""}>Deserts</button>
                        <button onClick={() => filteredItem("drinks")} className={selectedCategory === "drinks" ? "active" : ""}>Drinks</button>
                    </div>

                    {/* filter options */}
                    <div className="flex justify-end mb-4 rounded-sm">
                        <div className="bg-black p-2 ">
                            <FaFilter className="text-white h-4 w-4" />
                        </div>
                        <select
                            id="sort"
                            onChange={(e) => handleSortChange(e.target.value)}
                            value={sortOption}
                            className="bg-black text-white px-2 py-1 rounded-sm"
                        >
                            <option value="default"> Default</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="low-to-high">Low to High</option>
                            <option value="high-to-low">High to Low</option>
                        </select>
                    </div>
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

            {/* Pagination */}
            <div className="flex justify-center my-8 flex-wrap gap-2">
                {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-green text-white" : "bg-gray-200"
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div >
    )
}

export default Menu