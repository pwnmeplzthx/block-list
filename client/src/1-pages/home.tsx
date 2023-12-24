import { authControllerGetSessionInfo } from '@/5-shared/api/generated'
import { useQuery } from '@tanstack/react-query'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export function HomePage () {

    const { data } = useQuery({
        queryKey: ['session'],
        queryFn: () => authControllerGetSessionInfo()
    })

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            {data?.email}
        </main>
    )
}
