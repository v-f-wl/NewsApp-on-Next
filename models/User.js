import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    pin: {
      type: Array,
      default: []
    }
  },
  {
    timestamps: true
  }
)
export default mongoose.models.User || mongoose.model('User', UserSchema)