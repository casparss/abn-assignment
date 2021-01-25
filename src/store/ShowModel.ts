import { action, observable } from "mobx";
import { Icast, Icastcredits, Iepisode, Iseason, Ishow, tvmaze } from 'tvmaze-api-ts';

export class ShowModel {
    constructor(show: Ishow) {
        this.show = show;
        this.fetchcast();
        this.fetchSeasons();
    }

    @observable
    isFetchCastInFlight: boolean = false;

    @observable
    isFetchEpisodesInFlight: boolean = false;

    @observable
    isFetchSeasonsInFlight: boolean = false;

    @observable
    show: Ishow;

    @observable
    cast: Icast[] = [];

    @observable
    seasons: Iseason[] = [];

    @observable
    episodes: Iepisode[] = []

    @action
    private async fetchcast(): Promise<void> {
        try {
            this.isFetchCastInFlight = true;
            this.cast = await tvmaze.shows.cast(String(this.show.id));
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
            this.seasons = await tvmaze.shows.seasons(String(this.show.id));
        } catch ({ message }) {
            console.error('fetchSeasons error', message);
        } finally {
            this.isFetchSeasonsInFlight = false;
        }
    }

    @action
    private async fetchEpisodes(): Promise<void> {
        try {
            this.isFetchEpisodesInFlight = true;
            this.episodes = await tvmaze.shows.episodes(String(this.show.id));
        } catch ({ message }) {
            console.error('fetchEpisodes error', message);
        } finally {
            this.isFetchEpisodesInFlight = false;
        }
    }
}

export default ShowModel;