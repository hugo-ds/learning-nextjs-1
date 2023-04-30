import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Name() {
    const router = useRouter()

    // URL: /products/[name]?color=red
    // Read name => const { name } = router.query
    // Read color => const { color } = router.query
    const { name } = router.query

    console.log(router.query)

    return (
        <div>
            <Head>
                <title>{name}</title>
                <meta name='description' content={`${name}のページ`} />
                <meta property='og:title' content={name?.toString()} />
                <meta property='og:description' content={`${name}のページ`} />
            </Head>
            <p>Product {name} page.</p>
        </div>
    )
}
