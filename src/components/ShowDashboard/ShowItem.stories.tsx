import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import ShowItem from "./ShowItem";
import { Ishow } from "../../services/ShowService/types";
import { BrowserRouter } from "react-router-dom";

export default {
    title: "ShowItem",
    component: ShowItem,
    templateArgs: {},
    decorators: [
        (StoryBook) => (
            <BrowserRouter>
                <StoryBook />
            </BrowserRouter>
        ),
    ],
} as Meta;

const Template: Story<Ishow> = (args) => <ShowItem {...args} />;

export const TypicalItem = Template.bind({});
TypicalItem.args = {
    id: 1,
    name: "Return of the dog",
    image: {
        medium: "https://placedog.net/120/160",
        original: "https://placedog.net/120/160",
    },
    rating: { average: 9.6 },
};
