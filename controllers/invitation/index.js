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
const create = (req, res) => {
    res.send("Приглашение успешно создано!");
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
