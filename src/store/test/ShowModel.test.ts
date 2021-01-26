import { showsFixture } from "../../test/fixtures/showsFixture";
import ShowModel from "../ShowModel";
import * as fetchResourceModule from '../../utils/fetch';
import seasonsFixture from "../../test/fixtures/seasonsFixture";
import castFixture from "../../test/fixtures/castFixture";
jest.mock('../../utils/fetch');
const fetchResource = fetchResourceModule.fetchResource as jest.MockedFunction<typeof fetchResourceModule.fetchResource>;

describe("Show model tests.", () => {
    beforeAll(() => {
        fetchResource.mockResolvedValue([]);
    });

    afterAll(() => {
        jest.unmock('../../utils/fetch');
    });

    test("fetchSeasons() sets seasons prop correctly.", async () => {
        fetchResource.mockResolvedValue(seasonsFixture);
        const showModel = new ShowModel(showsFixture[0]);
        await showModel.fetchSeasons();
        expect(showModel?.seasons).toBeDefined();
        expect(showModel!.seasons.length).toBe(3);
    });

    test("fetchCast() sets cast prop correctly.", async () => {
        fetchResource.mockResolvedValue(castFixture);
        const showModel = new ShowModel(showsFixture[0]);
        await showModel.fetchCast();
        expect(showModel?.cast).toBeDefined();
        expect(showModel!.cast.length).toBe(15);
    });
});
