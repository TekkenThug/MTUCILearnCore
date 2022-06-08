import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Schedule from 'App/Models/Schedule'

export default class Time extends BaseModel {
  @hasMany(() => Schedule, {
    foreignKey: 'timeId',
  })
  public schedules: HasMany<typeof Schedule>

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'startTime' })
  public startTime: string

  @column({ serializeAs: 'endTime' })
  public endTime: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
