"use client"
import '@splidejs/react-splide/css';
import {Splide, SplideSlide, SplideProps} from '@splidejs/react-splide';
import Image from "next/image";
import '@/styles/productslider.css'
import {useEffect, useRef} from "react";

export default function ProductSlider({images, refClass}: { images: string[], refClass: string }) {

    const mainSliderOptions: SplideProps = {
        options: {
            type: 'fade',
            rewind: true,
            pagination: false,
            arrows: true,
            fixedHeight: 476,
            autoplay: true,
            wheel:true,
        }
    };


    const thumbnailOptions: SplideProps = {
        options: {
            fixedWidth: 80,
            fixedHeight: 80,
            gap: 12,
            rewind: true,
            pagination: false,
            focus: 'center',
            arrows: false,
            breakpoints: {
                600: {
                    fixedWidth: 60,
                    fixedHeight: 44,
                },
            },
        }
    };

    const mainImageProductSliderRef = useRef(null);
    const thumbnailImageProductRef = useRef(null);

    useEffect(() => {
        if (mainImageProductSliderRef.current && thumbnailImageProductRef.current) {
            // @ts-ignore
            const primarySplide = mainImageProductSliderRef?.current?.splide;
            // @ts-ignore
            const secondarySplide = thumbnailImageProductRef?.current?.splide;

            primarySplide.sync(secondarySplide); // Link the two sliders together.
        }
    }, []);

    return (<>
            <Splide aria-label="My Favorite Images" options={mainSliderOptions.options} ref={mainImageProductSliderRef}
                    className={refClass}>
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
            <Splide aria-label="My Favorite Images" options={thumbnailOptions.options} className={"mt-3 " + refClass}
                    ref={thumbnailImageProductRef}>
                {images.map((image: string, index: number) =>
                    (
                        <SplideSlide key={"thumbnail-slider-" + index}>
                            <Image priority={false} width={80} height={80}
                                   className={"h-full w-full rounded-[6px] object-cover"}
                                   src={image} alt={"thumbnail-slider-image-" + index}/>
                        </SplideSlide>
                    ))
                }
            </Splide>
        </>
    )
}