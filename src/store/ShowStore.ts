import { action, computed, observable } from "mobx";
import ShowService from "../services/ShowService";
import { Ishow } from "../services/ShowService/types";
import ShowModel from "./ShowModel";

export interface ShowStoreArgs {
    dashboardShows: Ishow[];
    searchedShows: Ishow[];
}

export class ShowStore {
    constructor(showStoreArgs?: ShowStoreArgs) {
        if (showStoreArgs) {
            const { dashboardShows, searchedShows } = showStoreArgs;
            this.dashboardShows = dashboardShows;
            this.searchedShows = searchedShows;
        }
    }

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
            .slice(0, 5);
    }

    @computed
    get isLoading(): boolean {
        return this.fetchIsInFlight || this.searchIsInFlight;
    }

    get dashboardShowsByRank() {
        return this.dashboardShows.sort((showA, showB) => showB.rating.average - showA.rating.average).slice(0, 30);
    }

    @action
    selectShowModelById(selectId: number): ShowModel | undefined {
        const show = this.dashboardShows.find(({ id }) => selectId === id) || this.searchedShows.find(({ id }) => selectId === id);

        if (show) {
            const showModel = new ShowModel(show);
            showModel.fetchCast();
            showModel.fetchSeasons();
            return showModel;
        }
    }

    @action
    async fetchIndexShows(page: number = 1): Promise<void> {
        try {
            this.fetchIsInFlight = true;
            this.dashboardShows = await ShowService.fetchIndex(page);
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
            const shows = await ShowService.search(searchTerm);
            this.searchedShows = shows.map(({ show }) => show);
        } catch ({ message }) {
            console.error('searchShows error', message);
        } finally {
            this.searchIsInFlight = false;
        }
    }
};

export default ShowStore;
