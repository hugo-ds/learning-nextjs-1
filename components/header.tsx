import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div className={styles.bk}>
            <p>Header</p>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}
