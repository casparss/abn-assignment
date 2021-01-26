import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import * as fetchResourceModule from "../../../utils/fetch";
jest.mock("../../../utils/fetch");
const fetchResource = fetchResourceModule.fetchResource as jest.MockedFunction<
    typeof fetchResourceModule.fetchResource
>;
fetchResource.mockResolvedValue(Promise.resolve([]));

describe("App", () => {
    test("renders App", () => {
        render(<App />);
        const headerTitle = screen.getByText(/ABN Amro assignment/i);
        expect(headerTitle).toBeInTheDocument();
    });
});
