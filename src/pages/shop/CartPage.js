import React from 'react'
import useCart from '../../hook/useCart'
import { FaTrash } from 'react-icons/fa'
import Swal from 'sweetalert2'
const CartPage = () => {
    const [cart, refetch] = useCart()
    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure you want to delete?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3001/carts/${item._id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div className="section-container">
            <div className=" bg-gradient-to-r from-indigo-500 from-0% to-100%">
                <div className="py-24 flex flex-col  justify-center items-center gap-8">
                    <div className="md:w-1/2 space-y-8 px-4">
                        <h2 className="md:text-5xl text-4xl font-bold md:leading-sung leading-sung">
                            Item Added to the {" "}
                            <span className="text-blue">food</span> ever</h2>

                    </div>
                </div>
            </div>
            {/* Table for cart */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-blue text-white">
                            <tr>
                                <th>#</th>
                                <th>Food</th>
                                <th>Item Name</th>
                                <th>Qntity</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        {/* <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th> */}
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td className="font-medium">{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price}</td>
                                        {/* <td>{item.quantity}</td> */}
                                        <th>
                                            <button className="btn btn-ghost text-red " onClick={() => handleDelete(item)}><FaTrash /></button>
                                        </th>
                                    </tr>

                                ))
                            }
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default CartPage