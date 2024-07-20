import React from 'react'
import LogoSVG from './LogoSVG'

const Header = () => {
    return (
        <div className='w-full flex justify-between items-center px-4 py-4'>
            <a href="/" className='flex_center gap-4'>
                <LogoSVG size={60} color='hsl(var(--primary))' />
                {/* <h1 className='text-[2em] font-bold'>GradMaster</h1> */}
            </a>

            <nav className="flex justify-between items-center gap-4">
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a className='ml-6 bg-primary p-2 rounded-md text-white' href="#">Get Started</a>
            </nav>
        </div>
    )
}

export default Header