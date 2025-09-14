"use client"

import React from 'react'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { SunIcon, MoonIcon } from "lucide-react"


const ThemeButton = () => {
    const { resolvedTheme, setTheme } = useTheme()

    const handleThemeToggle = () => {
        if (resolvedTheme == "dark")
            setTheme("light")
        else
            setTheme("dark")
    }

    return (
        <Button variant='ghost' size="icon" onClick={handleThemeToggle}>
            <SunIcon className='dark:hidden' />
            <MoonIcon className='hidden dark:block' />
        </Button>
    )
}

export default ThemeButton