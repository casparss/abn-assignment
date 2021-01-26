import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
} from "@material-ui/core";
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import Carousel, { CarouselProps } from "../Carousel";

const useStyles = makeStyles({
    root: {
        width: 130,
        marginRight: "15px",
    },
    media: {
        height: 140,
    },
});

const TestItem: React.FC<{ name: string }> = ({ name }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="http://placekitten.com/200/300"
                    title="Kitten"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

const testItems = [
    { name: "Dave" },
    { name: "Pete" },
    { name: "Rachel" },
    { name: "Ian" },
    { name: "Wouter" },
    { name: "Michiel" },
    { name: "Sanra" },
    { name: "Jacq" },
    { name: "Phillipe" },
    { name: "Clare" },
    { name: "Alexdra" },
    { name: "Rio" },
    { name: "Alan" },
    { name: "Tasha" },
    { name: "Laura" },
    { name: "Simon" },
    { name: "Grahem" },
    { name: "Adam" },
    { name: "Danielle" },
    { name: "Sasha" },
    { name: "Rob" },
];

export default {
    title: "Carousel",
    component: Carousel,
    templateArgs: {
        items: testItems,
        Item: TestItem,
    },
} as Meta;

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />;

export const TwentyItems = Template.bind({});
TwentyItems.args = {
    items: testItems,
    Item: TestItem,
};

export const FifteenItems = Template.bind({});
FifteenItems.args = {
    items: testItems.slice(0, 15),
    Item: TestItem,
};

export const TenItems = Template.bind({});
TenItems.args = {
    items: testItems.slice(0, 10),
    Item: TestItem,
};

export const FiveItems = Template.bind({});
FiveItems.args = {
    items: testItems.slice(0, 5),
    Item: TestItem,
};

export const NoItems = Template.bind({});
NoItems.args = {
    items: [],
    Item: TestItem,
};
