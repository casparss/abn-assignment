import { action, computed, observable } from "mobx";
import { tvmaze, IshowSearch, Ishow } from 'tvmaze-api-ts'

export class ShowStore {
    @observable
    dashboardShows: Ishow[] = [];

    @observable
    searchedShows: IshowSearch[] = [];

    @observable
    fetchIsInFlight: boolean = false;

    @observable
    searchIsInFlight: boolean = false;

    @computed
    get searchedShowsTransformed(): Ishow[] {
        const shows = this.searchedShows.map(({ show }) => show);
        console.log('shows', shows);
        return shows;
    }

    @computed
    get dashboardShowsByGenre(): { genre: string, shows: Ishow[] }[] {
        const shows = this.dashboardShows;

        return Array
            .from(new Set(shows.flatMap(({ genres }) => genres)))
            .map((genre) => ({
                genre: genre as string,
                shows: shows.filter(({ genres }) => genres.includes(genre as string))
            }));
    }

    get dashboardShowsByRank() {
        const shows = this.dashboardShows;

        // There is a typo in interface for IShow in the tvmaze-api-ts lib - the key name for rating is ratring which is wrong.
        // @ts-ignore
        return shows.sort((showA, showB) => showB.rating.average - showA.rating.average);
    }

    @action
    async fetchIndexShows(): Promise<void> {
        try {
            this.fetchIsInFlight = true;
            this.dashboardShows = await tvmaze.shows.page();
        } catch ({ message }) {
            console.error('fetchIndexShows error', message);
        } finally {
            this.fetchIsInFlight = false;
        }
    }

    @action
    async searchShows(searchTerm: string): Promise<void> {
        try {
            this.searchIsInFlight = true;
            this.searchedShows = await tvmaze.search.shows(searchTerm);
        } catch ({ message }) {
            console.error('searchShows error', message);
        } finally {
            this.searchIsInFlight = false;
        }
    }
};

export default ShowStore;
