import AppError from "../utils/AppError.js";
import catchAsync from "../utils/catchAsync.js";
import Users from "../models/userModel.js";

const registerUser = catchAsync(async (req, res, next) => {
    const {username, email, password} = req.body || {};

    const user = await Users.createUser(username, email, password);

    res.status(201).json({message: `User with username ${user.username} registered successfully!`});
})

export default registerUser;