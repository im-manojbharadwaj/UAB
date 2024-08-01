import React from 'react'
import SUCCESSIMAGE from '../assest/success.gif'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className = 'bg-slate-50 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-10 rounded'>
        <img
            src={SUCCESSIMAGE}
            width = {400}
            height = {400}
            className = 'mix-blend-multiply'
        />
        <p className = 'text-green-700 font-bold text-xl'>Payment Successful</p>
        <Link to = {'/order'} className = 'p-2 px-4 my-4 border-2 border-green-700 rounded font-semibold hover:bg-green-700 hover:text-white'>Go to Orders</Link>
    </div>
  )
}

export default Success