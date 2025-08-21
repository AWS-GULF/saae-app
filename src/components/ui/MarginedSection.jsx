import React from 'react'

export default function MarginedSection({ children }) {
    return (
        <div className='mx-4 sm:mx-8 lg:mx-20'>{children}</div>
    )
}
