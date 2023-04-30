import Layout from '../components/layout'
import { ReactElement } from 'react'

export default function About() {
    return <h1>About Page</h1>
}

About.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}
