import React from "react";

export default function cours(props) {
    console.log(props);
    return (
        <div className="text-center my-2">
            <h1>Le BTC est à : {props.results.bpi.EUR.rate} € </h1>
        </div>
    );
}

export async function getServerSideProps(context) {
    // console.log("CONTEXT", context);
    const data = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const results = await data.json();

    return {
        props: {
            results,
        },
    };
}

// https://api.coindesk.com/v1/bpi/currentprice.json
