const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [{ model: Product }],
  })
    .then((categoryResults) => res.json(categoryResults))
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: { id: req.params.id },
    include: [{ model: Product }],
  })
    .then((categoryResults) => {
      if (!categoryResults) {
        res
          .status(404)
          .json({ message: "There are no Categories associated with this ID" });
        return;
      }
      res.json(categoryResults);
    })
    .catch((err) => res.status(500).json(err));
});

router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((categoryResults) => res.json(categoryResults))
    .catch((err) => res.status(500).json(err));
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((categoryResults) => {
      if (!categoryResults) {
        res
          .status(404)
          .json({ message: "There are no Categories associated with this ID" });
        return;
      }
      res.json(categoryResults);
    })
    .catch((err) => res.status(500).json(err));
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Catergory.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((categoryResults) => {
      if (!categoryResults) {
        res
          .status(404)
          .json({ message: "There are no Categories associated with this ID" });
        return;
      }
      res.json(categoryResults);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
