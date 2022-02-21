const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  title: { type: String, required: true},
  description: String
})

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

}

module.exports = HomeModel;

// const HomeModel = require('../models/home-model')

// HomeModel.create({
//   title: 'MVC Model - Learning JS',
//   description: 'Luiz Otavio Mirando Curso'
// })
//   .then((data) => {
//     console.log(data);
//   }).catch((err) => {
//     console.error(err)
//   });