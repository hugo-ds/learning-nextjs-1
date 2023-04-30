import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import '@/styles/globals.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const router = useRouter()
    const admin = router.route.startsWith('/admin') ? true : false

    // Select layout
    const getLayout = admin
        ? (page: ReactElement) => <Layout>{page}</Layout>
        : (page: ReactElement) => <Layout>{page}</Layout>

    return <>{getLayout(<Component {...pageProps} />)}</>
}
