export class NotFound extends Error {
    name: string;
    description: string;
    constructor() {
        super();
        this.name = "Not found";
        this.description = "This register does not exists in the database"
    }
}