import connectDB from "../../../utils/connectMongoDB";
import PostModel from '../../../models/Post'
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function handler(req, res) {
  connectDB()
  //get
  try {
    const { id } = req.query
    const user = await PostModel.findById(id)
    if(!user){
      return res.status(404).json({
        message: 'Пользователь не найдем'
      })
    }
    const post = user._doc
    res.json({
      ...post
    })
  } catch (error) {
      res.status(404).json({
        message: 'Не удалось получить пост',
        error: error
    })
  }

  return res.status(500).json({
    message: 'что-то пошло не так'
  })
}