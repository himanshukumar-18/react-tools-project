import React from 'react'

const GlobalInput = ({ type, value, holder, chnage, style }) => {
    return (
        <>
            <input
                type={type}
                value={value}
                placeholder={holder}
                onChange={chnage}
                className={`${style}`}
            />
        </>
    )
}

export default GlobalInput