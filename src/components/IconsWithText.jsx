import React from 'react'

const IconsWithText = ({icon, text}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden">
      <img className="object-scale-down h-12 w-40" src={icon} alt={text}/>
        <div className="px-6 py-4">
          <p className="text-red-100 text-base">{text}</p>
        </div>
    </div>
  )
}

export default IconsWithText