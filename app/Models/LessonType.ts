import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Schedule from 'App/Models/Schedule'

export default class LessonType extends BaseModel {
  @hasMany(() => Schedule, {
    foreignKey: 'lessonTypeId',
  })
  public schedules: HasMany<typeof Schedule>

  @column({ isPrimary: true, serializeAs: null })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
