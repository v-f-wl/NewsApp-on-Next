import connectDB from "../../../utils/connectMongoDB";
import UserModal from '../../../models/User'
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try{
      await connectDB()
      const { userId } = req.query
      const user = await UserModal.findById(userId)
      if(!user){
        return res.status(404).json({
          message: 'Пользователь не найдем'
        })
      }
      const {passwordHash, ...userData} = user._doc
  
      res.json({
        ...userData
      })
    }catch(error){
      console.log(error)
      res.status(500).json({
        message: 'Нет доступа'
      })
    }
  }
  
}