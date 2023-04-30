import Image from 'next/image'
import Link from 'next/link'
export default function ShowImage() {
    return (
        <div>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
            </ul>
            <Image src='/next.svg' width={500} height={300} alt='image' />
        </div>
    )
}
