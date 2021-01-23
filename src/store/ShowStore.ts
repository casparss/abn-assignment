import { action, computed, observable } from "mobx";
import { tvmaze, IshowSearch, Ishow } from 'tvmaze-api-ts'

export class ShowStore {
    @observable
    dashboardShows: Ishow[] = [];

    @observable
    searchedShows: IshowSearch[] = [];

    @observable
    isInFlight: boolean = false;

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

    @action
    async searchShows(searchTerm: string): Promise<void> {
        try {
            this.isInFlight = true;
            this.searchedShows = await tvmaze.search.shows(searchTerm);
        } catch ({ message }) {
            console.error('searchShows error', message);
        } finally {
            this.isInFlight = false;
        }
    }

    @action
    async fetchIndexShows(): Promise<void> {
        try {
            this.isInFlight = true;
            this.dashboardShows = await tvmaze.shows.page();
        } catch ({ message }) {
            console.error('fetchIndexShows error', message);
        } finally {
            this.isInFlight = false;
        }
    }
};

export default ShowStore;
