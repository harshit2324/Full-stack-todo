import clsx from 'clsx'
import React from 'react'

const Button = ({type, text, onClick, actionButton, bgColor, ...props}) => {
  return (
   <button 
     onClick={onClick} 
     type={type} 
     className={clsx(
       actionButton && "text-white hover:bg-blue-800 focus:ring-4 font-medium text-sm px-5 py-2.5 me-2 rounded-lg mb-2 focus:outline-none",
       bgColor,
       "font-medium text-sm px-5 py-2 me-2 rounded-lg focus:outline-none"
     )}
     {...props}
   >
    {text}
   </button>
  )
}

export default Button;