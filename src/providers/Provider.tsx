"use client"

import { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type Props = {
    children?: React.ReactNode,
}

const Provider = ({ children }: Props) => {
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        if (typeof window !== 'undefined') setIsMounted(true)
    }, [])

    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            },
        },
    }))

    if (isMounted)
        return (
            <QueryClientProvider client={queryClient}>
                <SessionProvider>
                    {children}
                </SessionProvider>

                <Toaster position='bottom-right' />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        )
}

export default Provider;