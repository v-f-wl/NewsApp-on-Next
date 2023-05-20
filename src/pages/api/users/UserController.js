import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModal from '../../../../Models/User.js'


export const register = async(req, res) => {
  try{
    const password   = req.body.password
    const salt = await bcrypt.genSalt(11)

    const hash = await bcrypt.hash(password, salt)

    const doc = new UserModal({
      email: req.body.email,
      fullName: req.body.fullName,
      passwordHash: hash
    })
    const user = await doc.save()

    const token = jwt.sign({
      _id: user._id
    }, 
      'secret123',
      {
        expiresIn: '30d'
      }
    )

    const {passwordHash, ...userData} = user._doc

    res.json({
      ...userData,
      token
    })
  }catch(error){
    console.log(error)
    res.status(500).json({
      message: 'Не удалось зарегестироваться'
    })
  }
}
