const usersCtrl ={};

const userModel = require("../models/User");

usersCtrl.getUsers = async (req,res) => {
    const users = await userModel.find()
    res.json(users)
}

usersCtrl.getUser = async (req,res) => {
    const template = await userModel.findById(req.params.id);
    res.json(template)
}

usersCtrl.createUser =  async (req,res) => {
    const { nombre, correo, contraseña, isAdmin,} = req.body;
    const newTemplate = new userModel({
        nombre,
        contraseña,
        correo,
        isAdmin,
		sales: { vDia:0 ,vMes:0 ,vAño:0 ,vTotal:0 },
		car:[],
	    purchases:[]
    })
    await newTemplate.save();
    res.send("nota guardada")
}
usersCtrl.updateUser = async (req,res) => {
    await userModel.findOneAndUpdate({_id:req.params.id},req.body);
    res.send("nota editada")
}

usersCtrl.deleteUser = async (req,res) => {
    await userModel.findOneAndDelete({_id:req.params.id});
    res.send("nota eliminada")
}
module.exports = usersCtrl;