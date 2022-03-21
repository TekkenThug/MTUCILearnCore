import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Time from 'App/Models/Mongoose/Time'

export default class TimesController {
  public async index({}: HttpContextContract) {
    return await Time.find({});
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
