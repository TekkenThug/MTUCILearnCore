import Mongoose, { Schema } from '@ioc:Mongoose';

export default Mongoose.model(
  'Group',
  new Schema({
    id: Schema.Types.ObjectId,
    name: String,
  })
)
