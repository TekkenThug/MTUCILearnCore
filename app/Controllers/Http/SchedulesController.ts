import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { RequestContract } from '@ioc:Adonis/Core/Request'
import { getSchedule, setSchedule } from 'App/Services/Schedule'
import BaseController from './BaseController'

export default class SchedulesController extends BaseController {
  private extractQueryParams(request: RequestContract) {
    const queryParams = request.qs()

    return {
      even: queryParams.even,
      weekday: +queryParams.weekday,
      userID: queryParams.userID || null,
      group: queryParams.group || null,
    }
  }

  public async index({ request }: HttpContextContract) {
    const params = this.extractQueryParams(request)

    const response = await getSchedule(params)

    return response === 'empty'
      ? this.getCodeState(this.STATE.EMPTY)
      : response === 'holiday'
      ? this.getCodeState(this.STATE.HOLIDAY)
      : response
  }

  public async post({ request }: HttpContextContract) {
    const schedule = request.body()
    const params = this.extractQueryParams(request)

    await setSchedule(schedule, params)

    return this.getCodeState(this.STATE.SUCCESS)
  }
}
