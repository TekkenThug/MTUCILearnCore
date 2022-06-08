import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Schedule from 'App/Models/Schedule'

export default class Weekday extends BaseModel {
  @hasMany(() => Schedule)
  public schedules: HasMany<typeof Schedule>

  @column({ isPrimary: true })
  public id: number

  @column()
  public weekdayName: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
