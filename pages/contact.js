import React from "react";

export default function contact() {
    const pushFunc = () => {
        router.push("/");
    };
    return (
        <div>
            <h1>Contact</h1>
            <button onClick={pushFunc}>Push to Home</button>
        </div>
    );
}
