import Group from 'App/Models/Group'

export const getGroups = async (page = 1, limit = 0) => {
  return limit
    ? (await Group.query().orderBy('name').paginate(page, limit)).all()
    : Group.query().orderBy('name')
}
