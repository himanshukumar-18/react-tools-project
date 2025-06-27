import React from 'react'

const Button = ({ className, title, click }) => {
  return (
    <>
      <button
        className={`${className}`}
        onClick={click}
      >
        {title}
      </button>
    </>
  )
}

export default Button