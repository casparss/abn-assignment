import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { showsFixture } from "../../test/fixtures/showsFixture";
import { RouterDecorator } from "../../utils/storyBookDecorators";
import ShowCarousel, { ShowCarouselProps } from "./ShowCarousel";

export default {
    title: "ShowCarousel",
    component: ShowCarousel,
    templateArgs: {
        shows: [],
    },
    decorators: [RouterDecorator],
} as Meta;

const Template: Story<ShowCarouselProps> = (args) => <ShowCarousel {...args} />;

export const WithAlotOfItems = Template.bind({});
WithAlotOfItems.args = {
    genre: "Drama",
    // @ts-ignore
    shows: showsFixture,
};

export const WithFiveItems = Template.bind({});
WithFiveItems.args = {
    genre: "Drama",
    // @ts-ignore
    shows: showsFixture.slice(0, 5),
};

export const WithTenItems = Template.bind({});
WithTenItems.args = {
    genre: "Drama",
    // @ts-ignore
    shows: showsFixture.slice(0, 10),
};
