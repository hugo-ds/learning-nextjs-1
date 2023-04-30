import Content from '@/components/content'

export default function CSS() {
    return (
        <div>
            <h1 className='heading'>Hello Next.js</h1>
            <Content type='alert' />
            <Content type='warning' />
            <p>CSS Page</p>
            <style jsx>
                {`
                    .heading {
                        color: red;
                        background: green;
                    }
                `}
            </style>
        </div>
    )
}
