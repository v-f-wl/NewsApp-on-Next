import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    likesCount: {
      type: Number,
      default: 0
    },
    likesUser: {
      type: Array,
      default: []
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    color: {
      type: String,
      required: true
    },
  },
  // это выполняет уже сама схема
  {
    timestamps: true
  }
)
// первый параметр - как она будет называться, второе поле указываем схему 
export default mongoose.models.Posts || mongoose.model('Posts', PostSchema)