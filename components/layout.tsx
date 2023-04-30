import Header from './header'
import Footer from './footer'
import { ReactElement } from 'react'

type LayoutProps = Required<{
    readonly children: ReactElement
}>

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}
