const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * @route GET /api/invitation/
 * @desc Описание работы /api/invitation/
 * @access Public
 */
const index = (req, res) => {
  res.send("Главный запрос /api/invitation/");
};

/**
 * @route POST /api/invitation/create
 * @desc Создание приглашения
 * @access Public
 */

const create = async (req, res) => {
  const {
    wife,
    husband,
    place,
    wedding_date,
    invitation_text,
    event_steps,
    dresscode,
    questions,
    presence_text,
    presence,
  } = req.body;

  if (
    !wife ||
    !husband ||
    !place ||
    !wedding_date ||
    !invitation_text ||
    !event_steps ||
    !dresscode ||
    !questions ||
    !presence_text ||
    !presence
  ) {
    return res.status(400).json({ message: "Все поля должны быть заполнены" });
  }

  const data = {
    wife,
    husband,
    place,
    wedding_date,
    invitation_text,
    event_steps,
    dresscode,
    questions,
    presence_text,
    presence
  }

  try {
    const invitation = await prisma.invitation.create({
      data
    });
    return res.status(201).json({ message: "Данные успешно добавлены!", data: data });
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

/**
 * @route POST /api/invitation/del
 * @desc Удаление приглашения
 * @access Public
 */
const del = (req, res) => {
  res.send("Приглашение успешно удалено!");
};

module.exports = {
  index,
  create,
  del,
};
