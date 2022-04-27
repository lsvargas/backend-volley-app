const { PrismaClient } = require('@prisma/client');
const { UserInputError } = require('apollo-server');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

const generateToken = (newUser, email, expires='2h') => {
  return jwt.sign(
    { userId: newUser.id, email },
    // process.env["JWT_SECRET"],
    "hunterxhunter",
    { expiresIn: expires }
  );
}

const authResolvers = {
  Mutation: {
    registerUser: async (parent, { name, email, password }) => {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (user) throw new UserInputError(`El email ${email} ya existe`);

      const encryptedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.User.create({
        data: { name, email: email.toLowerCase(), password: encryptedPassword }
      });

      const token = generateToken(newUser, email);

      return { ...newUser, token };
    },
    loginUser: async (parent, { email, password }) => {
      const user = await prisma.User.findUnique({
        where: { email }
      });

      if (user && await bcrypt.compare(password, user.password)) {
        const token = generateToken(user, email);

        return { token, ... user };
      }

      throw new UserInputError(`Contraseña incorrecta para ${email}`);
    }
  }
};

module.exports = { authResolvers };
