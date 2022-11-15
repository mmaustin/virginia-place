import User from "../models/User.js";

const register = async (req, res) => {
    const {name, email, password} = req.body;
    const user = await User.create({name, email, password});
    res.status(201).json({user});
    //res.status(201).json({msg: 'Register user'});
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