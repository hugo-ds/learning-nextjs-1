import Link from 'next/link'

type Post = {
    id: string
    title: string
}

type Posts = {
    posts: Post[]
}

export default function index({ posts }: Posts) {
    return (
        <div>
            <h1>POSTS</h1>

            <ul>
                {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <Link href={`/posts/${post.id}`}>{post.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

// export async function getServerSideProps() {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const posts = await res.json()
//     // console.log(posts)
//     return { props: { posts } }
// }

export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()
    return { props: { posts } }
}
