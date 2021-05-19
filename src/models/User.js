const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        unique:true
    },
    contraseña:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true,
        unique:true
    },
    isAdmin:{
        type: Boolean,
        required: true
    },
    sales:{
        type: Schema.Types.Mixed,
        required: true
    },
    car:{
        type: Array,
        required: true
    },
    purchases:{
        type: Array,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model("user", userSchema);