const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../users/User-model');

// @desc Login
// @route  POST /auth
// @access Public
const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const foundUser = await User.findOne({ username }).exec();

  if (!foundUser || !foundUser.active) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const match = await bcrypt.compare(password, foundUser.password);

  if (!match) return res.status(401).json({ error: 'Unauthorized' });

  const accessToken = jwt.sign(
    {
      user: {
        username: foundUser.username,
        roles: foundUser.roles,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '1m' },
  );

  const refreshToken = jwt.sign(
    {
      username: foundUser.username,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '1d' },
  );

  // Create secure cookie with refresh token
  res.cookie('jwt', refreshToken, {
    httpOnly: true, // accessible only by web server
    secure: true, // https
    sameSite: 'None', // cross-site cookie
    maxAge: 1 * 24 * 60 * 60 * 1000, // cookie expires: 7 days
  });

  // Send accessToken containing username and roles
  res.json({ accessToken });
});

// @desc Refresh
// @route GET /auth/refresh
// @access Public
const refresh = (req, res) => {
  const { cookies } = req;
  if (!cookies?.jwt) return res.status(200).json({ error: 'No cookie found' });

  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    asyncHandler(async (err, decoded) => {
      if (err) return res.status(403).json({ message: 'Forbidden' });
      const { username, roles } = await User.findOne({ username: decoded.username });
      if (!username) return res.status(402).json({ message: 'Cant find user' });
      const accessToken = jwt.sign(
        {
          user: {
            username,
            roles,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1m' },
      );

      res.json({ username, roles, accessToken });
    }),
  );
};

// @desc Logout
// @route POST /auth/logout
// @access Public
const logout = (req, res) => {
  const { cookies } = req;
  if (!cookies?.jwt) return res.sendStatus(204); // No Content
  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: 'true' });
  res.json({ message: 'Cookie cleared' });
};

module.exports = {
  login,
  refresh,
  logout,
};
