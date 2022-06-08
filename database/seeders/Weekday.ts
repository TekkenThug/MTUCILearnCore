import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Weekday from 'App/Models/Weekday'

export default class extends BaseSeeder {
  public async run() {
    await Weekday.createMany([
      { weekdayName: 'Понедельник' },
      { weekdayName: 'Вторник' },
      { weekdayName: 'Среда' },
      { weekdayName: 'Четверг' },
      { weekdayName: 'Пятница' },
      { weekdayName: 'Суббота' },
    ])
  }
}
