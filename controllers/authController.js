import User from "../models/User.js";

const register = async (req, res) => {
    res.status(201).json({msg: 'Register user'});
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