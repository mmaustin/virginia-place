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
  const { email, name, buildingNumber} = req.body
  if (!email || !name || !buildingNumber) {
    throw new BadRequestError('Please provide all values')
  }
  const user = await User.findOne({ _id: req.user.userId })

  user.email = email;
  user.name = name;
  user.buildingNumber = buildingNumber;

  await user.save()

  const token = user.createJWT()

  res.status(StatusCodes.OK).json({ user, token})
}

export {
    register,
    login,
    updateUser
}