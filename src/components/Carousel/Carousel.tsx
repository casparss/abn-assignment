import React from "react";
import useCarousel from "./hooks/useCarousel";
import mapComponent from "../../utils/mapComponent";
import useCarouselStyles from "./styles";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { IconButton, Typography } from "@material-ui/core";

export interface CarouselProps {
    items: unknown[];
    Item: React.FunctionComponent<any>;
}

export const Carousel: React.FC<CarouselProps> = ({ items, Item }) => {
    const classes = useCarouselStyles();

    const {
        sliderRef,
        sliderStyle,
        incremetIdx,
        decrementIdx,
        isSliderAtBeginning,
        isSliderAtEnd,
    } = useCarousel(items);

    if (items.length === 0) {
        return (
            <Typography variant="body2" color="textSecondary" component="p">
                No carousel items
            </Typography>
        );
    }

    return (
        <div className={classes.container}>
            <IconButton
                className={classes.paddle}
                aria-label="Left carousel paddle"
                onClick={decrementIdx}
                disabled={isSliderAtBeginning}
                data-prev
            >
                <KeyboardArrowLeftIcon />
            </IconButton>

            <div className={classes.sliderContainer}>
                <div
                    className={classes.slider}
                    ref={sliderRef}
                    style={sliderStyle}
                    data-slider
                >
                    {items.map(mapComponent(Item))}
                </div>
            </div>

            {!isSliderAtEnd && (
                <IconButton
                    className={classes.paddle}
                    aria-label="Right carousel paddle"
                    onClick={incremetIdx}
                    data-next
                >
                    <KeyboardArrowRightIcon />
                </IconButton>
            )}
        </div>
    );
};

export default Carousel;
