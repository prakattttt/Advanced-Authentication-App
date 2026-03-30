import catchAsync from "../utils/catchAsync.js";
import Users from "../models/userModel.js";

const mainController = catchAsync(async (req, res, next) => {
    const userId = req.id;

    const user = await Users.getUsername(userId);

    res.status(200).json({ user })
})

export default mainController;