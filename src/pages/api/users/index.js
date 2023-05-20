import dbConnect from "../../../../utils/dbConnect";
import User from "../../../../Models/User";
import * as UserController from './UserController'
import * as valid from './validations'

dbConnect()

export default async (req, res) => {
  const { method } = req

  switch( method ){
    case 'GET': 
      try{
        const user = await User.find({})
        res.status(200).json({
          success: true,
          users: user
        })
      }catch(error){
        res.status(404).json({
          success: false,
          users: 'Not found users',
        }) 
      }
    case 'POST':
      try {
        UserController.register(req,res)
      } catch (error) {
        res.status(500).json({
          success: false,
          users: 'Not found users',
        }) 
      }
      break
    default:
      res.status(404).json({
        success: false,
        users: 'Not found users',
        err: error
      }) 
  }
}