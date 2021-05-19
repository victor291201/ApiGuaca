const productsCtrl = {};

const productModel = require("../models/Product");

productsCtrl.getProducts  = async (req,res) => {
    const products = await productModel.find()
    res.json(products)
}

productsCtrl.getProduct = async (req,res) => {
    const product = await productModel.findById(req.params.id);
    res.json(product)
}

productsCtrl.createProduct=  async (req,res) => {
    const { img, nombre, referencia, tipo, categoria, element, precio } = req.body;
    const filename = req.file.filename

    const newProduct = new productModel({
        img:["http://"+process.env.HOST+":"+process.env.PORT+"/public/img/"+filename],
        nombre,
        referencia,
        tipo,
        categoria,
        element,
        precio
    })
    await newProduct.save();

    res.send(newProduct)
}
productsCtrl.updateProduct = async (req,res) => {
    await productModel.findOneAndUpdate({_id:req.params.id},req.body);
    res.send("nota editada")
}

productsCtrl.deleteProduct = async (req,res) => {
    await productModel.findOneAndDelete({_id:req.params.id});
    res.send("nota eliminada")
}

module.exports = productsCtrl;