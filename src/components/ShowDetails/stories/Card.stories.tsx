import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Card, { CardProps } from "../Card";
import { Typography } from "@material-ui/core";
import { Center } from "../../../utils/storyBookDecorators";

export default {
    title: "Card",
    component: Card,
    templateArgs: {},
    decorators: [
        (Story) => (
            <div style={{ width: "250px" }}>
                <Story />
            </div>
        ),
        Center,
    ],
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const WithTitle = Template.bind({});
WithTitle.args = {
    title: "Hello there",
    children: (
        <>
            <img src="http://placekitten.com/200/300" />
            <Typography variant="body2">Cat</Typography>
        </>
    ),
};

export const WithCustomTitle = Template.bind({});
WithCustomTitle.args = {
    customTitleBar: (
        <div style={{ backgroundColor: "red" }}>
            <Typography>Custom title</Typography>
        </div>
    ),
    children: (
        <div>
            <img src="http://placekitten.com/200/300" />
            <Typography variant="body2">Cat</Typography>
        </div>
    ),
};
