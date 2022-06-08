import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Group from 'App/Models/Group'

export default class extends BaseSeeder {
  public async run() {
    await Group.createMany([
      { name: 'БСТ1901' },
      { name: 'БСТ1902' },
      { name: 'БСТ1903' },
      { name: 'БСТ1904' },
    ])
  }
}
