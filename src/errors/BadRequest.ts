export class BadRequest extends Error {
    name: string;
    description: string;
    constructor(value) {
        super();
        this.name = "Invalid Field";
        this.description = `The value ${value} is invalid`
    }
}