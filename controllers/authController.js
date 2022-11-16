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
    res.status(201).json({msg: 'Login user'});
}

const updateUser = async (req, res) => {
    res.status(201).json({msg: 'Update user'});
}

export {
    register,
    login,
    updateUser
}