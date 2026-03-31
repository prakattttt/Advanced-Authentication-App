import catchAsync from "../utils/catchAsync.js";
import Users from "../models/userModel.js";

const logoutUser = catchAsync(async (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;

  if (refreshToken) {
    await Users.removeRefreshToken(refreshToken);
  }

  res.clearCookie("jwt", { httpOnly: true, sameSite: "Strict" });
  res.clearCookie("refreshToken", { httpOnly: true, sameSite: "Strict" });

  res.status(200).json({ message: "Logout Successful!"});
});

export default logoutUser;
