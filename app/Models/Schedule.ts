import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import Weekday from 'App/Models/Weekday'
import Group from 'App/Models/Group'
import Pair from 'App/Models/Pair'
import LessonType from 'App/Models/LessonType'

export default class Schedule extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public weekdayId: number

  @belongsTo(() => Weekday)
  public weekday: BelongsTo<typeof Weekday>

  @column()
  public groupId: number

  @belongsTo(() => Group)
  public group: BelongsTo<typeof Group>

  @column()
  public timeId: number

  @belongsTo(() => Pair)
  public time: BelongsTo<typeof Pair>

  @column()
  public lessonTypeId: number

  @belongsTo(() => LessonType)
  public lessonType: BelongsTo<typeof LessonType>

  @column()
  public even: 0 | 1

  @column()
  public subject: string

  @column()
  public classroom: string

  @column()
  public teacher: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
