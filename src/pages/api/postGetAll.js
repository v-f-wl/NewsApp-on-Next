import connectDB from "../../../utils/connectMongoDB";
import PostModel from '../../../models/Post'
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function handler(req, res) {
  connectDB()
  try{
    const posrs = await PostModel.find().populate('user').exec()

    res.json(posrs)
  }catch(error){
    res.status(500).json({
      message: error
    })
  }
  return res.status(500).json({
    message: 'что-то пошлоо не так'
  })
}
// res.status(200).json({ name: 'John efDoe' });