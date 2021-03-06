var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/project_2');

var User = require("../models/user.js");
var FoodItem = require("../models/item.js");

mongoose.promise = global.Promise;

User.remove({}, function(error) {
  console.log(error);
});

FoodItem.remove({}, function(err) {
  console.log(err);
});

var monica = new User({
  name: 'Monica',
  email: 'mgrages1@gmail.com',
  favorite_food: 'tofu',
  items: [{
    name: "milk",
    food_group: "dairy",
    expirationDate: new Date("May 29, 2017"),
    comments: "for Friday night milkshakes"
    },
    {
    name: "tofu",
    food_group: "protein",
    expirationDate: new Date("May 29, 2017"),
    comments: "tofu stir fry!"
    }]
});

var clark = new User({
  name: 'Clark',
  email: 'Clark@clark.com',
  favorite_food: 'country fried steak',
  items: [{
    name: "bananas",
    food_group: "fruits",
    comments: "gonna make bananas foster"
    },
    {
    name: "marinara sauce",
    food_group: "vegetables",
    expirationDate: new Date("Mar 04, 2018"),
    }]
});


monica.save(function(error) {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Monica created!');
});

clark.save(function(error) {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Clark created!');
});
