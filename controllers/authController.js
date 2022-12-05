import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import {BadRequestError, UnAuthenticatedError} from '../errors/index.js'

const register = async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      throw new BadRequestError('please provide all values')
    }
    const userAlreadyExists = await User.findOne({ email })
    if (userAlreadyExists) {
      throw new BadRequestError('Email already in use')
    }
    
    const user = await User.create({ name, email, password })
  
    const token = user.createJWT()
    //this is the info that's returned to the front-end
    res.status(StatusCodes.CREATED).json({
      user: {
        name: user.name,
        email: user.email,
        buildingNumber: user.buildingNumber
      },
      token,
      buildingNumber: user.buildingNumber
    })
}

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('Please provide all values')
  }
  const user = await User.findOne({ email }).select('+password')
  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials')
  }

  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials')
  }
  const token = user.createJWT()
  user.password = undefined
  res.status(StatusCodes.OK).json({ user, token})
}

const updateUser = async (req, res) => {
    res.status(201).json({msg: 'Update user'});
}

export {
    register,
    login,
    updateUser
}