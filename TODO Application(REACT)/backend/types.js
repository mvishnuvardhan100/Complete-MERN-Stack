const zod = require("zod");

const addTODO = zod.object({
  title: zod.string(),
  description: zod.string()
});

const updateTODO = zod.object({
  _id: zod.string()
});

module.exports = {
  updateTODO,
  addTODO
};
