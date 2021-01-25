import { action, observable } from "mobx";
import ShowService from "../services/ShowService";
import { Icast, Iseason, Ishow } from "../services/ShowService/types";

export class ShowModel {
    constructor(show: Ishow) {
        this.show = show;
        this.fetchcast();
        this.fetchSeasons();
    }

    @observable
    isFetchCastInFlight: boolean = false;

    @observable
    isFetchSeasonsInFlight: boolean = false;

    @observable
    show: Ishow;

    @observable
    cast: Icast[] = [];

    @observable
    seasons: Iseason[] = [];

    @action
    private async fetchcast(): Promise<void> {
        try {
            this.isFetchCastInFlight = true;
            this.cast = await ShowService.fetchCast(this.show.id);
        } catch ({ message }) {
            console.error('searchShows error', message);
        } finally {
            this.isFetchCastInFlight = false;
        }
    }

    @action
    private async fetchSeasons(): Promise<void> {
        try {
            this.isFetchSeasonsInFlight = true;
            this.seasons = await ShowService.fetchSeasons(this.show.id);
        } catch ({ message }) {
            console.error('fetchSeasons error', message);
        } finally {
            this.isFetchSeasonsInFlight = false;
        }
    }
}

export default ShowModel;