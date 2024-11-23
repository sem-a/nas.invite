const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const prisma = new PrismaClient();

const sendEmail = async (email, verificationToken) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_LOGIN,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOprions = {
    from: process.env.EMAIL_LOGIN,
    to: email,
    subject: "Подтверждение Email",
    text: `Пожалуйста подтвердите ваш адрес электронной почты, перейдя по ссылке:\nhttp://localhost:${process.env.PORT}/api/user/verify?token=${verificationToken}`,
  };

  try {
    await transporter.sendMail(mailOprions);
  } catch (error) {
    console.error("Ошибка отправки письма:", error);
    throw new Error("Не удалось отправить письмо");
  }
};

/**
 * @route GET /api/user/verify
 * @desc Активация аккаунта
 * @access Public
 */
const verify = async (req, res) => {
  const token = req.query.token;

  try {
    const secret = process.env.JWT_SECRET;
    const decodedToken = jwt.verify(token, secret);

    const user = await prisma.users.findUnique({
      where: {
        id: decodedToken,
      },
    });

    if (!user || user.confirmed)
      return res
        .status(400)
        .json({ message: "Неккоректная ссылка или аккаунт уже активирован!" });

    await prisma.users.update({
      where: {
        id: user.id,
      },
      data: {
        confirmed: true,
      },
    });

    return res.status(200).json({ message: "Аккаунт успешно активирован!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Произошла ошибка на сервере! ${error.message}` });
  }
};

/**
 * @route POST /api/user/reg
 * @desc Регистрация пользователя
 * @access Public
 */
const reg = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res
      .status(400)
      .json({ message: "Пожалуйста, заполните все обязательные поля!" });

  try {
    const registerUser = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (registerUser)
      return res
        .status(409)
        .json({ message: "Такой пользователь уже зарегистрирован!" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.users.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const secret = process.env.JWT_SECRET;
    const token = jwt.sign({ id: user.id }, secret, { expiresIn: "30d" })

    await sendEmail(email, token)

    if (user && secret)
      res.status(201).json({
        id: user.id,
        email: user.email,
        name: user.name,
        token,
      });
    else
      return res
        .status(400)
        .json({ message: "Не удалось создать пользователя!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Произошла ошибка на сервере! ${error.message}` });
  }
};

/**
 * @route POST /api/user/login
 * @desc Логин пользователя
 * @access Public
 */
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Пожалуйста, запоните все обязательные поля!" });

  try {
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    isPasswordCorrect = user && (await bcrypt.compare(password, user.password));
    const secret = process.env.JWT_SECRET;

    if (user && isPasswordCorrect)
      res.status(200).json({
        id: user.id,
        name: user.name,
        email: user.email,
        token: jwt.sign({ id: user.id }, secret, { expiresIn: "30d" }),
      });
    else return res.status(403).json({ message: "Неверный логин или пароль!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Произошла ошибка на сервере! ${error.message}` });
  }
};

module.exports = {
  reg,
  login,
  verify
};
