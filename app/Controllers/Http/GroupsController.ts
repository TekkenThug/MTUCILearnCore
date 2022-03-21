import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Group from 'App/Models/Mongoose/Group';

export default class GroupsController {
  public async index({}: HttpContextContract) {
    const res = await Group.find({}).sort('name').limit(4);

    return res;
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
