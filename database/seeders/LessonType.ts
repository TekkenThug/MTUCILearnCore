import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import LessonType from 'App/Models/LessonType'

export default class extends BaseSeeder {
  public async run() {
    await LessonType.createMany([{ name: 'practice' }, { name: 'lecture' }, { name: 'laboratory' }])
  }
}
