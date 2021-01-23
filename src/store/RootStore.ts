import ShowStore from "./ShowStore";

export class RootStore {
    show: ShowStore;

    constructor() {
        this.show = new ShowStore();
    }
}

export default new RootStore();