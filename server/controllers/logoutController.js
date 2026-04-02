import catchAsync from "../utils/catchAsync.js";
import Users from "../models/userModel.js";

const logoutUser = catchAsync(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (refreshToken) {
    await Users.removeRefreshToken(refreshToken);
  }

  res.clearCookie("jwt");
  res.clearCookie("refreshToken");

  res.status(200).json({ message: "Logged out successfully" });
});

export default logoutUser;
