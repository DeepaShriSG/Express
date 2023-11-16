const mongoose = require('mongoose')
require('dotenv').config()
try {
    
    console.log(process.env.dbName,process.env.dbUrl)
    mongoose.connect(`${process.env.dbUrl}/${process.env.dbName}`)
    console.log("Database connected Successfully")
    
} catch (error) {
    console.log(error)
}

module.exports = mongoose