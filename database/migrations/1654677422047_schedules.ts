import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'schedules'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('weekday_id').unsigned().references('weekdays.id')

      table.integer('time_id').unsigned().references('pairs.id')

      table.integer('group_id').unsigned().references('groups.id')

      table.integer('lesson_type_id').unsigned().references('lesson_types.id')

      table.integer('even').checkIn(['1', '0'])

      table.string('subject')

      table.string('classroom')

      table.string('teacher')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
