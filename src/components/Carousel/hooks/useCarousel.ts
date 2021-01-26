import { useMediaQuery, useTheme } from "@material-ui/core";
import { useRef, useState, CSSProperties, useEffect } from "react";

const PAGE_SIZE = 6;
const PAGE_SIZE_SM = 2;

export const useCarousel = (items: unknown[]) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [idx, setIdx] = useState<number>(0);
    const [sliderStyle, setSlideStyle] = useState<CSSProperties>({});
    const isSliderAtBeginning = idx === 0;
    const isSliderAtEnd = idx >= items.length - PAGE_SIZE;
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const pageSize = isSmallScreen ? PAGE_SIZE_SM : PAGE_SIZE;

    useEffect(() => {
        moveSlider();
    }, [idx]);

    const incremetIdx = () => {
        setIdx(idx + pageSize);
    };

    const decrementIdx = () => {
        const requestedIndex = idx - pageSize;

        if (Math.sign(requestedIndex) === -1) {
            setIdx(0);
        } else {
            setIdx(requestedIndex);
        }
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
        idx,
        sliderRef,
        sliderStyle,
        isSliderAtBeginning,
        isSliderAtEnd,
        incremetIdx,
        decrementIdx,
    };
}

export default useCarousel;