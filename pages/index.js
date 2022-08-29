import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
    const id = "article";
    return (
        <>
            <Head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Cours NEXT</title>
            </Head>
            <div className={styles.container}>
                <h1>Hello NEXT JS !!!</h1>
                {/* <a href="https://google.com">GOOGLE</a> */}
                <Link href={`/blog/${id}`}>
                    <a className="btn btn-primary">Blog</a>
                </Link>
            </div>
        </>
    );
}
