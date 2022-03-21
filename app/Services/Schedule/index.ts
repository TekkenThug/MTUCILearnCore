import { isHoliday } from 'Utils/time'
import Schedule from 'App/Models/Mongoose/Schedule'
import User from 'App/Models/Mongoose/User'

export const setSchedule = async (existSchedule, params) => {
  const schedule = existSchedule.filter((item) => item.name)

  schedule.sort((a, b) => a.number - b.number)

  const key = `schedule.${params.even}.${params.weekday}.lessons`

  await Schedule.findOneAndUpdate(
    { group: params.group },
    {
      $set: {
        [key]: schedule,
      },
    }
  )
}

export const getSchedule = async (params) => {
  if (isHoliday(params.weekday)) return 'holiday'

  const scheduleRecord = await Schedule.findOne({
    group: params.userID
      ? await User.findOne({ userID: params.userID }).distinct('group')
      : params.group,
  }).select('schedule')

  if (!scheduleRecord) return 'empty'

  const res = scheduleRecord.schedule[params.even][params.weekday].lessons

  return !res.length ? 'empty' : res
}
