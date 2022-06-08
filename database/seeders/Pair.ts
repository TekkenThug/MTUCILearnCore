import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Time from 'App/Models/Time'

export default class extends BaseSeeder {
  public async run() {
    await Time.createMany([
      { startTime: '9:30', endTime: '11:05' },
      { startTime: '11:20', endTime: '12:55' },
      { startTime: '13:10', endTime: '14:45' },
      { startTime: '15:25', endTime: '17:00' },
      { startTime: '17:15', endTime: '18:50' },
    ])
  }
}
