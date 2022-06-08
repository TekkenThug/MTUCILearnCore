import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { Mongoose } from 'mongoose'
import Env from '@ioc:Adonis/Core/Env'

export default class MongoProvider {
  constructor(protected app: ApplicationContract) {}

  public async register() {
    const mongoose = new Mongoose()

    // await mongoose.connect(Env.get('MONGODB_CONNECTION'))

    this.app.container.singleton('Mongoose', () => mongoose)
  }

  public async boot() {}

  public async ready() {}

  public async shutdown() {
    await this.app.container.use('Mongoose').disconnect()
  }
}
