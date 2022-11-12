const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  try {
    const find = await Tag.findAll();
    res.status(200).json(find);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const find = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: product_tag }],
    });
    res.status(200).json(find);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new tag
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const del = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(del);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
