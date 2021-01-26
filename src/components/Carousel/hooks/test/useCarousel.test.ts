import { act } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import useCarousel from "../useCarousel";

const items = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 }
];

describe('useCarousel tests', () => {
    test("Initial state.", async () => {
        const { result } = renderHook(() => useCarousel(items));
        expect(result.current.idx).toBe(0);
        expect(result.current.isSliderAtBeginning).toBeTruthy();
        expect(result.current.isSliderAtEnd).toBeFalsy();
    });

    test("incrementIdx increments index by the size of the page size: 6", () => {
        const { result } = renderHook(() => useCarousel(items));

        act(() => {
            result.current.incremetIdx();
        });

        expect(result.current.idx).toBe(6);
        expect(result.current.isSliderAtBeginning).toBeFalsy();
        expect(result.current.isSliderAtEnd).toBeTruthy();
    });

    test("decrementIdx decremts index back to 0,", () => {
        const { result } = renderHook(() => useCarousel(items));

        act(() => { result.current.incremetIdx(); });
        act(() => { result.current.decrementIdx(); });

        expect(result.current.idx).toBe(0);
        expect(result.current.isSliderAtBeginning).toBeTruthy();
        expect(result.current.isSliderAtEnd).toBeFalsy();
    });
});

