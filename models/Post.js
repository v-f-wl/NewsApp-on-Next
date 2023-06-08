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
      required: true,
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
    comments: {
      type: Array,
      default: []
    }
  },
  {
    timestamps: true
  }
)
export default mongoose.models.Posts || mongoose.model('Posts', PostSchema)