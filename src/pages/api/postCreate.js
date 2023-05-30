import connectDB from "../../../utils/connectMongoDB";
import PostModel from '../../../models/Post'

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function handler(req, res) {
  if(req.method === 'POST'){
    await connectDB()
    try{
      const doc = new PostModel({
        text: req.body.text,
        name: req.body.nameValue,
        user: req.body.userId,
        color: req.body.color
      })

      const post = await doc.save()
      res.json(post)
    }catch(error){
      console.log(error)
      res.status(510).json({
        message: error
      })
    }
  }
}