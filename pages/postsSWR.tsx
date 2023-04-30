import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

type Post = {
    id: string
    title: string
}

export default function postsSWR() {
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <div>
            <h1>POSTS</h1>
            <ul>
                {data.map((post: Post) => {
                    return <li key={post.id}>{post.title}</li>
                })}
            </ul>
        </div>
    )
}
