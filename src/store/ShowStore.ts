import { action, computed, observable } from "mobx";
import { Ishow, tvmaze } from 'tvmaze-api-ts';
import ShowModel from "./ShowModel";

export class ShowStore {
    @observable
    dashboardShows: Ishow[] = [];

    @observable
    searchedShows: Ishow[] = [];

    @observable
    fetchIsInFlight: boolean = false;

    @observable
    searchIsInFlight: boolean = false;

    @computed
    get dashboardShowsByGenre(): { genre: string, shows: Ishow[] }[] {
        const shows = this.dashboardShows;

        return Array
            .from(new Set(shows.flatMap(({ genres }) => genres)))
            .map((genre) => ({
                genre: genre as string,
                shows: shows.filter(({ genres }) => genres.includes(genre as string)).slice(0, 15)
            }))
            .slice(0, 3);
    }

    @computed
    get isLoading(): boolean {
        return this.fetchIsInFlight || this.searchIsInFlight;
    }

    get dashboardShowsByRank() {
        const shows = this.dashboardShows;

        // There is a typo in interface for IShow in the tvmaze-api-ts lib - the key name for rating is ratring which is wrong.
        // @ts-ignore
        return shows.sort((showA, showB) => showB.rating.average - showA.rating.average).slice(0, 30);
    }

    selectShowModelById(selectId: number): ShowModel | undefined {
        const show = this.dashboardShows.find(({ id }) => selectId === id) || this.searchedShows.find(({ id }) => selectId === id);

        if (show) {
            return new ShowModel(show);
        }
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
            const shows = await tvmaze.search.shows(searchTerm);
            this.searchedShows = shows.map(({ show }) => show);
        } catch ({ message }) {
            console.error('searchShows error', message);
        } finally {
            this.searchIsInFlight = false;
        }
    }
};

export default ShowStore;
