import React, { useContext, useEffect } from 'react'
import { shopContext } from '../context/shopContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useSearchParams } from 'react-router-dom'

function Verify() {
    const { navigate, token, setCartItems,backendUrl } = useContext(shopContext)
    const [searchParams] = useSearchParams()

    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async () => {
        try {
            if (!token) return

            const response = await axios.post(
                backendUrl + '/api/order/verifyStripe',
                { success, orderId },
                { headers: { token } }
            )

            if (response.data.success) {
                setCartItems({})
                navigate('/orders')
            } else {
                navigate('/cart')
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // ✅ Trigger verifyPayment automatically when params are available
    useEffect(() => {
        verifyPayment()
    }, [success, orderId])

    return (
        <div>
            {/* You can optionally show a small loader or message */}
        </div>
    )
}

export default Verify
