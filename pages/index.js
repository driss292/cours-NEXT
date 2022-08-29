// import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
    const id = "article";
    return (
        <>
            <div className={styles.container}>
                <h1>Hello NEXT JS !!!</h1>
                <a href="https://google.com">GOOGLE</a>
                <Link href={`/blog/${id}`}>
                    <a>Blog</a>
                </Link>
            </div>
        </>
    );
}
