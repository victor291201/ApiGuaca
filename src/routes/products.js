const { Router } = require("express");
const router = Router();
const upload = require("../multer")
const { getProduct, createProduct, updateProduct, deleteProduct, getProducts } = require("../controllers/products.controller");


router.route("/")
    .get(getProducts)
    .post(upload.single('img'),createProduct)

router.route("/:id")
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct)



module.exports = router;