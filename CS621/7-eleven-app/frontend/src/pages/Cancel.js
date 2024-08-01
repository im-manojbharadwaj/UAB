import React from 'react'
import CANCELIMAGE from '../assest/cancel.gif'
import { Link } from 'react-router-dom'

const Cancel = () => {
    return (
        <div className = 'bg-slate-50 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-10 rounded'>
            <img
                src={CANCELIMAGE}
                width = {400}
                height = {400}
                className = 'mix-blend-multiply'
            />
            <p className = 'text-red-700 font-bold text-xl'>Payment Declined</p>
            <Link to = {'/cart'} className = 'p-2 px-4 my-4 border-2 border-red-700 rounded font-semibold hover:bg-red-700 hover:text-white'>Go to Cart</Link>
        </div>
      )
}

export default Cancel