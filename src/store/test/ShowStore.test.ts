import { showsFixture } from "../../test/fixtures/showsFixture";
import ShowStore from "../ShowStore";
import * as fetchResourceModule from '../../utils/fetch';
jest.mock('../../utils/fetch');
const fetchResource = fetchResourceModule.fetchResource as jest.MockedFunction<typeof fetchResourceModule.fetchResource>;

describe("Show store tests.", () => {
    beforeAll(() => {
        fetchResource.mockResolvedValue(Promise.resolve([]));
    });

    test("computed prop dashboardshows by genre returns correct data", () => {
        const showStore = new ShowStore({
            dashboardShows: showsFixture,
            searchedShows: []
        });

        const shows = showStore.dashboardShowsByGenre;
        expect(shows.length).toBe(3);

        expect(shows[0].genre).toBe('Drama');
        expect(shows[0].shows.length).toBe(15);
        expect(shows[1].genre).toBe('Science-Fiction');
        expect(shows[1].shows.length).toBe(14);
        expect(shows[2].genre).toBe('Thriller');
        expect(shows[2].shows.length).toBe(15);
    });

    test("computed prop dashboardShowsByRank returns correct data", () => {
        const showStore = new ShowStore({
            dashboardShows: showsFixture,
            searchedShows: []
        });

        const shows = showStore.dashboardShowsByRank;
        expect(shows.length).toBe(30);
        expect(shows[0].rating.average).toBe(8.9);
        expect(shows[29].rating.average).toBe(7.9);
    });

    test("selectShowModelById correctly returns showmodel with supplied show.", () => {
        const showStore = new ShowStore({
            dashboardShows: showsFixture,
            searchedShows: []
        });

        const showModel = showStore.selectShowModelById(1);
        expect(showModel).toBeDefined();
        expect(showModel?.show).toBeDefined();
        expect(showModel!.show.id).toBe(showsFixture[0].id);
    });

    test("fetchIndexShows() correctly sets dashboardShows.", async () => {
        fetchResource.mockResolvedValue(Promise.resolve([showsFixture[0]]));
        const showStore = new ShowStore();
        await showStore.fetchIndexShows();

        expect(showStore.dashboardShows.length).toBe(1);
        expect(showStore.dashboardShows[0].id).toBe(showsFixture[0].id);
    });

    test("searchShows() correctly sets searchedShows.", async () => {
        fetchResource.mockResolvedValue(Promise.resolve([{ show: showsFixture[0], ranking: 1 }]));
        const showStore = new ShowStore();
        await showStore.searchShows('stuff');

        expect(showStore.searchedShows.length).toBe(1);
        expect(showStore.searchedShows[0].id).toBe(showsFixture[0].id);
    });
});
