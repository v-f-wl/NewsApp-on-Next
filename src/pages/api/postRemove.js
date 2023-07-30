import connectDB from "../../../utils/connectMongoDB";
import PostModel from '../../../models/Post'
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function handler(req, res) {
  if(req.method === 'DELETE'){
    try {
      await connectDB()
      const { id } = req.query
      PostModel.findOneAndDelete(
        {
          _id: id
        }
      )
      .then( (doc) => {
        if(!doc){
          return res.status(404).json({
            message: "Статья не найдена"
          })
        }
  
        res.json({
          message: 'Succec'
        })
      })
      .catch(err => {
        res.status(404).json({
          message: "Проблемы"
        })
      })
  
    } catch (error) {
      console.log(error)
      res.status(404).json({
        message: 'Не удалось удалить пост'
      })
    }
  }
}