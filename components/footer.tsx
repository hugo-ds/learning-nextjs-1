import styles from '../styles/Header.module.css'
import { useState } from 'react'

export default function Footer() {
    const [count, setCount] = useState(0)

    return (
        <div className={styles.bk}>
            <p>Footer</p>
            <p>{count}</p>
            <div>
                <button onClick={() => setCount(count + 1)}>Count+</button>
            </div>
        </div>
    )
}
