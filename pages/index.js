import Head from "next/head";
import styles from "../styles/Home.module.css";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

// import Image from "next/image";
// import Link from "next/link";

export default function Home(props) {
    const [state, setState] = useState(false);

    useEffect(() => {
        newWord();
    }, []);

    const newWord = () => {
        fetch("/api/vocapi")
            .then((res) => res.json())
            .then((data) => setState(data));
    };

    // console.log(state);

    let randomWord;
    if (state) {
        const array = state.englishList[0].data;
        randomWord = array[Math.floor(Math.random() * array.length)].en;
        // console.log(randomWord);
    }

    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Cours NEXT</title>
            </Head>
            <div>
                <h1 className={styles.titre}>Mot au hasard</h1>
                <button
                    onClick={newWord}
                    className="btn btn-primary d-block m-auto "
                >
                    Get Random Words
                </button>
                <h2 className="text-center">{randomWord}</h2>
                {/* <table className={styles.tableau}>
                    <tbody>
                        {props.array.map((el) => (
                            <tr key={uuidv4()}>
                                <td>{el.en}</td>
                                <td>{el.fr}</td>
                            </tr>
                        ))}
                    </tbody> 
                </table> */}
                {/* <Link href={`/blog/${id}`}>
                    <a className="btn btn-primary">Blog</a>
                </Link> */}
            </div>
        </>
    );
}

export async function getStaticProps() {
    const data = await import(`/data/vocabulary.json`);
    const array = data.vocabulary;

    // if (array.length === 0) {
    //     return {
    //         notFound: true,
    //     };
    // }

    // if (array.length === 0) {
    //     return {
    //         redirect: {
    //             destination: "/isr",
    //         },
    //     };
    // }

    return {
        props: {
            array,
        },
    };
}
