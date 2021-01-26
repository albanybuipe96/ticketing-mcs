import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import { app } from '../app'

let mongo: any

beforeAll(async () => {
    process.env.JWT_KEY = 'asdfasdf' // not proper way to setup though

    mongo = new MongoMemoryServer()
    const mongoUri = await mongo.getUri()

    await mongoose.connect(mongoUri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
})

beforeAll(async () => {
    const collections = await mongoose.connection.db.collections()
    for (let collection of collections) {
        await collection.deleteMany({})
    }
})

afterAll(async () => {
    await mongo.stop()
    await mongoose.connection.close()
})



// TODO: Section 10.9