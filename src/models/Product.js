const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    img:{
        type: Array,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    referencia:{
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    element: Array,
    precio:{
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model("product", productSchema);