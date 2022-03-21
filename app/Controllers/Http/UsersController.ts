import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { updateUserGroup } from 'App/Services/User';
import BaseController from './BaseController';

export default class UsersController extends BaseController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({ params: { id: userID }, request }: HttpContextContract) {
    const { params: { group } } = request.body();

    await updateUserGroup(userID, group);

    return this.getCodeState(this.STATE.SUCCESS);
  }

  public async destroy({}: HttpContextContract) {}
}
