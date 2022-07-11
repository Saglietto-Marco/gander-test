import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AddNumberForm from '../components/AddNumbers'

const AddNumbers: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Add Numbers</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>
                    Add Two Numbers
                </h1>
                <AddNumberForm />
            </main>
        </div>
    )
}

export default AddNumbers