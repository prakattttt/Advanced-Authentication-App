import catchAsync from "../utils/catchAsync.js";
import Users from "../models/userModel.js";
import jwt from "jsonwebtoken";

const generateAccessToken = (_id) => {
  return jwt.sign({ _id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};

const generateRefreshToken = (_id) => {
  return jwt.sign({ _id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "5d",
  });
};

const loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body || {};

  const user = await Users.loginUser(email, password);

  const accessToken = generateAccessToken(user._id);
  const refreshToken = generateRefreshToken(user._id);

  await user.addRefreshToken(refreshToken);

  res.cookie("jwt", accessToken, {
    httpOnly: true,
    maxAge: 15 * 60 * 1000,
    sameSite: "Strict",
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 5 * 24 * 60 * 60 * 1000,
    sameSite: "Strict",
  });

  res.status(200).json({ message: `${user.username} logged in successfully!` });
});

export default loginUser;
