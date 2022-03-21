import Mongoose, { Schema } from '@ioc:Mongoose'

export default Mongoose.model(
  'Time',
  new Schema({
    number: Number,
    time: String,
  })
)
