const router = require("express").Router();
// const categoryRoutes = require('./category-routes');
// const productRoutes = require('./product-routes');
// const tagRoutes = require('./tag-routes');
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send("<h1>Incorrect Route!</h1>");
});

// router.use('/categories', categoryRoutes);
// router.use('/products', productRoutes);
// router.use('/tags', tagRoutes);

module.exports = router;
