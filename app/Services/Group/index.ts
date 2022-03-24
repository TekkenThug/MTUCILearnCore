import Group from 'App/Models/Mongoose/Group'

export const getGroups = async (page = 1, limit = 0) => {
  if (limit) {
    return await Group.find({})
      .sort('name')
      .skip((page - 1) * limit)
      .limit(limit)
  }

  return await Group.find({}).sort('name').limit(limit)
}
