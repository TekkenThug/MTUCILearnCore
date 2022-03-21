import Group from 'App/Models/Mongoose/Group';

export const getGroups = async () => {
    return await Group.find({}).sort('name');
}