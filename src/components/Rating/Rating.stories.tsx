import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import Rating, { RatingProps } from "./Rating";

export default {
    title: "Rating",
    component: Rating,
    templateArgs: {
        rating: 5.0,
    },
} as Meta;

const Template: Story<RatingProps> = (args) => <Rating {...args} />;

export const HighRating = Template.bind({});
HighRating.args = {
    rating: 9.9,
};

export const LowRating = Template.bind({});
LowRating.args = {
    rating: 1.0,
};
