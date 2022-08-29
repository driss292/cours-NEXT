import React from "react";
import Link from "next/link";

export default function index() {
    return (
        <div>
            <h1>Le Blog</h1>
            <Link href={`/blog/10 plats basques`}>
                <a>10 plats Basques</a>
            </Link>
        </div>
    );
}
