import { useRef, useState, CSSProperties, useEffect } from "react";

const PAGE_SIZE = 6;

export const useCarousel = (items: unknown[]) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [idx, setIdx] = useState<number>(0);
    const [sliderStyle, setSlideStyle] = useState<CSSProperties>({});
    const isSliderAtBeginning = idx === 0;
    const isSliderAtEnd = idx >= items.length - PAGE_SIZE;

    useEffect(() => {
        moveSlider();
    }, [idx]);

    const incremetIdx = () => {
        setIdx(idx + PAGE_SIZE);
    };

    const decrementIdx = () => {
        setIdx(idx - PAGE_SIZE);
    };

    const moveSlider = () => {
        if (!sliderRef.current) {
            return;
        }
        const width = sliderRef.current.offsetWidth / items.length;
        setSlideStyle({
            transform: `translateX(${-(width * idx)}px)`,
            transition: `transform 400ms ease`,
        });
    };

    return {
        sliderRef,
        sliderStyle,
        isSliderAtBeginning,
        isSliderAtEnd,
        incremetIdx,
        decrementIdx,
    };
}

export default useCarousel;