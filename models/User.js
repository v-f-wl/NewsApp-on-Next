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
    },
    avatarImg: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    age: {
      type: String,
      default: ''
    },
    hobbies: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
)
export default mongoose.models.User 