import { useRouter } from 'next/router'

type Params = {
    params: {
        post: string
    }
}

type Post = {
    id: string
    title: string
    body: string
}

export default function post(post: Post) {
    const router = useRouter()

    const api_key = process.env.NEXT_PUBLIC_API_KEY // Read NEXT_PUBLIC_API_KEY from .env.local (server side)

    if (router.isFallback) {
        // Wait for page creation. (when fallback: true)
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>POST {post.id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

// export async function getServerSideProps({ params }: Params) {
//     const id = params.post
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     const post = await res.json()
//     if (!Object.keys(post).length) {
//         return {
//             notFound: true,
//         }
//     }
//     return { props: { post } }
// }

export async function getStaticProps({ params }: Params) {
    const id = params.post
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    if (!Object.keys(post).length) {
        return {
            notFound: true,
        }
    }
    return { props: post }
}

// Get paths
export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()
    const paths = posts.map((post: Post) => `/posts/${post.id}`)

    const api_key = process.env.API_KEY // Read API_KEY from .env.local (server side)

    return {
        paths,
        fallback: false,
    }
}
