import React from "react";
import Image from "next/image";
import img1 from "../public/assets/img1.jpg";
import img2 from "../public/assets/img2.jpg";
import img3 from "../public/assets/img3.jpg";

export default function galery() {
    return (
        <div>
            <Image
                layout="responsive"
                placeholder="blur"
                src={img1}
                width="3848"
                height="2565"
            />
            <Image
                layout="responsive"
                placeholder="blur"
                src={img2}
                width="6000"
                height="4000"
            />
            <Image
                layout="responsive"
                placeholder="blur"
                src={img3}
                width="3346"
                height="4736"
            />
            {/* <img src="/assets/img1.jpg" alt="" />
            <img src="/assets/img2.jpg" alt="" />
            <img src="/assets/img3.jpg" alt="" /> */}
        </div>
    );
}
