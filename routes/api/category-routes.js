const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    const find = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(find);
  } catch (err) {
    res.status(400).json(err);
  }
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const findId = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    res.status(200).json(findId);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const create = await Category.create(req.body);
    res.status(200).json(create);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const update = await Category.update(
      {
        category_name: req.body.category_name,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json(update);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const destroy = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(destroy);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
