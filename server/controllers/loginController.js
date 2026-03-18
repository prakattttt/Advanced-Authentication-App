import AppError from "../utils/AppError.js";
import catchAsync from "../utils/catchAsync.js";
import Users from "../models/userModel.js";

const loginUser = catchAsync(async (req, res, next) => {
    const {email, password} = req.body || {};

    const user = await Users.loginUser(email, password)

    res.status(201).json({message: `${user.username} logged in successfully!`});
})

export default loginUser;