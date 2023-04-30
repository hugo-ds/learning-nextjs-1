type Props = {
    type: string
}

// Styled jsx test component
export default function Content({ type }: Props) {
    return (
        <div>
            <p>Content component type={type}</p>
            <style jsx>{`
                p {
                    color: ${type == 'alert' ? 'red' : 'blue'};
                }
            `}</style>
            {/* Make the style global */}
            {/* <style global jsx>{`
                p {
                    color: blue;
                }
            `}</style> */}
        </div>
    )
}
