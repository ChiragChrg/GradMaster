import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-full flex justify-between items-center px-4 py-4 bg-gray-300'>
            <h1>GradMaster</h1>

            <nav className="flex justify-between items-center gap-4">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">AIMIT</a>
                <a href="#">Get Started</a>
            </nav>
        </div>
    )
}

export default Header