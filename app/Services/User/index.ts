import User from 'App/Models/User'
import Group from 'App/Models/Group'

export const updateUserGroup = async (id, newGroup) => {
  const group = await Group.query().select('id').where('name', '=', newGroup).limit(1)

  if (group) {
    await User.updateOrCreate({ tgId: id }, { tgId: id, groupName: group[0].id })
  }
}
