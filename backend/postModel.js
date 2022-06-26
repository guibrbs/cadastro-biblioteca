const mongoose = require("mongoose");
const schema = mongoose.Schema(
    {
        nome: 'String',
        autor: 'String',
        data: 'String'
    },
    {timestamps: true}
);

const post = mongoose.model('Post', schema)
module.exports = post
