import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useQuery } from '@tanstack/react-query'

const useCart = () => {
    const { user } = useContext(AuthContext)
    // let user = "safkhka"
    const { refetch, data: cart = [] } = useQuery({
        // queryKey: ["carts", user?.email],
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3001/carts?email=${user?.email}`)
            return res.json();
        },

    })
    return [cart, refetch]
}

export default useCart