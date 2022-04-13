export class NotFound extends Error {
    name: string;
    description: string;
    constructor(value) {
        super();
        this.name = "Not found";
        this.description = `Value ${value} does not exist in the database`
    }
}