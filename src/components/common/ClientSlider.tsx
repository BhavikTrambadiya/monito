"use client"
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import '@/styles/clientslider.css'
import {Splide, SplideProps, SplideSlide} from "@splidejs/react-splide";
import Image from "next/image";
import {useRef} from "react";

export default function ClientSlider({images}: { images: string[] }) {
    const mainSliderOptions: SplideProps = {
        options: {
            type: 'slide',
            rewind: true,
            pagination: true,
            arrows: false,
            fixedHeight: 340,
            fixedWidth: 248,
            gap: 10,
            snap: true,
            autoplay: true,
        }
    };

    const clientSliderRef = useRef(null);
    return (
        <Splide aria-label="My Favorite Images" options={mainSliderOptions.options} ref={clientSliderRef}
                className={"client-images"}>
            {images.map((image: string, index: number) =>
                (
                    <SplideSlide key={"main-slider-" + index}>
                        <Image priority={false} width={500} height={500}
                               className={"h-full w-full rounded-[10px] object-cover"}
                               src={image} alt={"main-slider-image-" + index}/>
                    </SplideSlide>
                ))
            }
        </Splide>
    )
}
;