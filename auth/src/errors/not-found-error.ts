import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
    statusCode: number = 404

    constructor() {
        super('Error while reaching the route')

        Object.setPrototypeOf(this, NotFoundError.prototype)
    }

    serializeError(): { message: string, field?: string }[] {
        console.error(this.message)
        return [{ message: 'Route not found' }]
    }
    
}