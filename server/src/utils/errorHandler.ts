export class APIError extends Error {
    public status: number;
    constructor(message: string, status: number = 500) {
        super(message);
        this.status = status;
        return this;
    }
}
