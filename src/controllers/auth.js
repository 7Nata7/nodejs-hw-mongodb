import createHttpError from 'http-errors';
import authService from '../services/auth.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await authService.findUserByEmail(email);
  if (existingUser) {
    throw createHttpError(409, 'Email in use');
  }

  const newUser = await authService.registerUser({ name, email, password });

  res.status(201).json({
    status: 'success',
    message: 'Successfully registered a user!',
    data: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    },
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await authService.findUserByEmail(email);

  if (!user || !(await authService.validatePassword(password, user.password))) {
    throw createHttpError(401, 'Invalid email or password');
  }

  // Видалення старих сесій
  await authService.deleteSessionsByUserId(user._id);

  const session = await authService.createSession(user._id);

  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    secure: true,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 днів
  });

  res.status(200).json({
    status: 'success',
    message: 'Successfully logged in an user!',
    data: {
      accessToken: session.accessToken,
    },
  });
};

const logoutUser = async (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    throw createHttpError(401, 'No refresh token provided');
  }

  const existingSession = await authService.findSessionByRefreshToken(refreshToken);

  if (!existingSession) {
    throw createHttpError(401, 'Invalid refresh token');
  }

  await authService.deleteSessionById(existingSession._id);

  res.clearCookie('refreshToken');

  res.status(204).send();
};

const refreshSession = async (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    throw createHttpError(401, 'No refresh token provided');
  }

  const existingSession = await authService.findSessionByRefreshToken(refreshToken);

  if (!existingSession) {
    throw createHttpError(401, 'Invalid refresh token');
  }

  const userId = existingSession.userId;

  // Видалення старих сесій
  await authService.deleteSessionsByUserId(userId);

  const newSession = await authService.createSession(userId);

  res.cookie('refreshToken', newSession.refreshToken, {
    httpOnly: true,
    secure: true,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 днів
  });

  res.status(200).json({
    status: 'success',
    message: 'Successfully refreshed a session!',
    data: {
      accessToken: newSession.accessToken,
    },
  });
};

export default {
  registerUser: ctrlWrapper(registerUser),
  loginUser: ctrlWrapper(loginUser),
  logoutUser: ctrlWrapper(logoutUser),
  refreshSession: ctrlWrapper(refreshSession),
};