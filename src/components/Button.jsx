import React from 'react'

const Button = ({ className, title, click, type }) => {
  return (
    <>
      <button
        className={`${className}`}
        onClick={click}
        type={type}
      >
        {title}
      </button>
    </>
  )
}

export default Button