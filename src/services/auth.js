import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../db/models/User.js';
import Session from '../db/models/Session.js';

// Знаходить користувача за електронною адресою
const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

// Реєструє нового користувача
const registerUser = async ({ name, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  await newUser.save();
  return newUser;
};

// Перевіряє, чи збігається переданий пароль із зареєстрованим
const validatePassword = async (inputPassword, userPassword) => {
  return await bcrypt.compare(inputPassword, userPassword);
};

// Створює нову сесію з access і refresh токенами
const createSession = async (userId) => {
  const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '30d' });

  const accessTokenValidUntil = new Date(Date.now() + 15 * 60 * 1000); // 15 хвилин
  const refreshTokenValidUntil = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 днів

  const session = new Session({
    userId,
    accessToken,
    refreshToken,
    accessTokenValidUntil,
    refreshTokenValidUntil,
  });

  await session.save();
  return session;
};

// Видаляє всі сесії користувача за його ID
const deleteSessionsByUserId = async (userId) => {
  await Session.deleteMany({ userId });
};

// Знаходить сесію за переданим refresh токеном
const findSessionByRefreshToken = async (refreshToken) => {
  return await Session.findOne({ refreshToken });
};

// Видаляє сесію за її ID
const deleteSessionById = async (sessionId) => {
  await Session.findByIdAndDelete(sessionId);
};

export default {
  findUserByEmail,
  registerUser,
  validatePassword,
  createSession,
  deleteSessionsByUserId,
  findSessionByRefreshToken,
  deleteSessionById
};