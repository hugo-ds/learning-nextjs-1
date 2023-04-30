import Head from 'next/head'
import Link from 'next/link'

const products = [{ name: 'bag' }, { name: 'shoes' }, { name: 'socks' }]

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <h1>Hello Next.js</h1>
            <ul>
                {products.map((product) => {
                    return (
                        <li key={product.name}>
                            <Link href={`/products/${product.name}`}>{product.name}</Link>
                        </li>
                    )
                })}
            </ul>
            <ul>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link
                        href={{
                            pathname: '/about',
                            query: { name: 'test' },
                        }}
                    >
                        About page with query in url
                    </Link>
                </li>
                <li>
                    <Link href='/show-image'>Show image</Link>
                </li>
                <li>
                    <Link href='/fetch-and-show-image'>Fecth and show image</Link>
                </li>
                <li>
                    <Link href='/posts'>Fecth posts</Link>
                </li>

                <li>
                    <Link href='/postsSWR'>Fecth posts with SWR</Link>
                </li>

                <li>
                    <Link href='/css'>Styled jsx</Link>
                </li>
            </ul>
        </div>
    )
}
