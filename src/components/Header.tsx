import React from 'react'
import LogoSVG from './CustomUI/LogoSVG'
import ThemeButton from './CustomUI/ThemeButton'

const Header = () => {
    return (
        <header className='w-full flex justify-between items-center px-4 py-4'>
            <a href="/" className='flex_center gap-4'>
                <LogoSVG size={60} color='hsl(var(--primary))' />
                {/* <h1 className='text-[2em] font-bold'>GradMaster</h1> */}
            </a>

            <nav className="flex justify-between items-center gap-4">
                <ThemeButton />
                <a className='bg-primary px-4 py-2 rounded-md text-white' href="#">Get Started</a>
            </nav>
        </header>
    )
}

export default Header