import React from "react";
import useCarousel from "./hooks/useCarousel";
import mapComponent from "../../utils/mapComponent";
import useCarouselStyles from "./styles";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { IconButton } from "@material-ui/core";

export const Carousel: React.FC<{
    items: unknown[];
    Item: React.FunctionComponent<any>;
}> = ({ items, Item }) => {
    const classes = useCarouselStyles();

    const {
        sliderRef,
        sliderStyle,
        incremetIdx,
        decrementIdx,
        isSliderAtBeginning,
        isSliderAtEnd,
    } = useCarousel(items);

    return (
        <div className={classes.container}>
            <IconButton
                aria-label="Left carousel paddle"
                onClick={decrementIdx}
                disabled={isSliderAtBeginning}
            >
                <KeyboardArrowLeftIcon />
            </IconButton>

            <div className={classes.sliderContainer}>
                <div
                    className={classes.slider}
                    ref={sliderRef}
                    style={sliderStyle}
                >
                    {items.map(mapComponent(Item))}
                </div>
            </div>

            {!isSliderAtEnd && (
                <IconButton
                    aria-label="Right carousel paddle"
                    onClick={incremetIdx}
                >
                    <KeyboardArrowRightIcon />
                </IconButton>
            )}
        </div>
    );
};

export default Carousel;
