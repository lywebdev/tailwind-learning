import styles from './Core.module.scss';

export function Part4() {
    return <form action="">
        <input
            type="text"
            placeholder='Enter email'
            className={styles.field}
        />

        <button className='dark:bg-tailwind-learning hide inline-block'></button>
    </form>
}