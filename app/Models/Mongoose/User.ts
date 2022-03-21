import Mongoose, { Schema } from '@ioc:Mongoose'

export default Mongoose.model(
  'User',
  new Schema({
    userID: Number,
    group: String
  })
)
