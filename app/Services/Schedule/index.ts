import { isHoliday } from 'Utils/time'
import Schedule from 'App/Models/Schedule'
import User from 'App/Models/User'

interface Pair {
  time: number
  subject: string
  lessonType: number
  classroom?: string
  teacher?: string
}

export const setSchedule = async (
  existSchedule: Pair[],
  params: { even: 0 | 1; group: number; weekday: number }
) => {
  const schedule = existSchedule.filter((item) => item.time)

  schedule.sort((a, b) => a.time - b.time)

  for (const pair of schedule) {
    await Schedule.updateOrCreate(
      {
        weekdayId: params.weekday,
        even: params.even,
        groupId: params.group,
        timeId: pair.time,
      },
      {
        weekdayId: params.weekday,
        even: params.even,
        groupId: params.group,
        timeId: pair.time,
        subject: pair.subject,
        lessonTypeId: pair.lessonType,
        classroom: pair.classroom,
        teacher: pair.teacher,
      }
    )
  }
}

export const getSchedule = async ({ userId, weekday, even }) => {
  if (isHoliday(weekday)) return 'holiday'

  const userGroup = await User.query().select('groupName').where('tg_id', '=', userId)

  const records = await Schedule.query()
    .select('*')
    .where('groupId', '=', userGroup[0].groupName)
    .where('even', even)
    .where('weekdayId', weekday)
    .orderBy('time_id')
    .preload('time')
    .preload('lessonType')

  return !records || !records.length ? 'empty' : records
}
