import { fetchResource } from "../../utils/fetch";
import { Icast, Iseason, Ishow, IshowSearch } from "./types";

export class ShowService {
    private static baseUrl: string = 'http://api.tvmaze.com';

    static fetchIndex(page: number): Promise<Ishow[]> {
        return fetchResource<Ishow[]>({
            url: `${this.baseUrl}/shows`,
            query: { page }
        });
    }

    static search(q: string): Promise<IshowSearch[]> {
        return fetchResource<IshowSearch[]>({
            url: `${this.baseUrl}/search/shows`,
            query: { q }
        });
    }

    static fetchSeasons(id: string | number): Promise<Iseason[]> {
        return fetchResource<Iseason[]>({
            url: `${this.baseUrl}/shows/${id}/seasons`
        });
    }

    static fetchCast(id: string | number): Promise<Icast[]> {
        return fetchResource<Icast[]>({
            url: `${this.baseUrl}/shows/${id}/cast`
        });
    }
}

export default ShowService;