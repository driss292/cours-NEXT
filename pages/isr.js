import React from "react";

export default function contact(props) {
    console.log(props);

    return (
        <div>
            <h1>Contact</h1>
        </div>
    );
}

export async function getStaticProps() {
    const quote = await fetch("https://pokeapi.co/api/v2/pokedex/");
    const data = await quote.json();

    return {
        props: {
            data: data,
        },
        revalidate: 20,
    };
}

// https://goquotes-api.herokuapp.com/api/v1/random?count=1
