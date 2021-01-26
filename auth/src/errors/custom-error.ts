
export abstract class CustomError extends Error {
    abstract statusCode: number

    constructor(message: string) {
        super(message)

        // Essential for extending built-in class
        Object.setPrototypeOf(this, CustomError.prototype)
    }

    abstract serializeError(): { message: string, field?: string }[]
}