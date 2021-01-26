import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, mount } from "enzyme";
import React from "react";
import Carousel from "../Carousel";

configure({ adapter: new Adapter() });

const Item = ({ label }: { label: string }) => <div>{label}</div>;

const items = [
    { id: 1, label: "item" },
    { id: 2, label: "item" },
    { id: 3, label: "item" },
    { id: 4, label: "item" },
    { id: 5, label: "item" },
    { id: 6, label: "item" },
    { id: 7, label: "item" },
    { id: 8, label: "item" },
    { id: 9, label: "item" },
    { id: 10, label: "item" },
    { id: 11, label: "item" },
    { id: 12, label: "item last" },
];

test("next click updates style attribute.", () => {
    const wrapper = mount(<Carousel items={items} Item={Item} />);
    wrapper.find("[data-next]").at(0).simulate("click");
    wrapper.update();
    const sliderContainer = wrapper.find("[data-slider]");
    expect(sliderContainer.prop("style")).toStrictEqual({
        transform: "translateX(0px)",
        transition: "transform 400ms ease",
    });
});
