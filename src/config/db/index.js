const mongoose = require('mongoose');


async function connect(){
    try {
     await mongoose.connect('mongodb+srv://asmbd:A123123a@cluster0.nd0eikk.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
     });
        console.log('Connect successfully')
    } catch (error) {
        console.log('Connect fail')
    }

}

module.exports = {connect};