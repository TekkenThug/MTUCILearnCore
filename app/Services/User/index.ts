import User from "App/Models/Mongoose/User"

export const updateUserGroup = async (id, newGroup) => {
    await User.findOneAndUpdate({ userID: id }, { group: newGroup });
}