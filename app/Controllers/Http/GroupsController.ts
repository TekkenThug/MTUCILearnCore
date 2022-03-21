import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { getGroups } from 'App/Services/Group';

export default class GroupsController {
  public async index({}: HttpContextContract) {
    return await getGroups();
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
