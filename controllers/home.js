const path = require('path');
const http = require('https');
const fs = require('fs');


//mongodb stuff
//var MongoClient = require('mongodb').MongoClient;
//var assert = require('assert');
//var ObjectId = require('mongodb').ObjectID;
//var url = 'mongodb://localhost:27017/projects';



/**
require('../db.js');
*var customer = mongoose.model('customer');
*var InvoiceDetails = mongoose.model('InvoiceDetails');
*var payments = mongoose.model('payments');
*var products = mongoose.model('products');
**/

//sanity check
console.log("Home.js loaded")

//mongo sanity check
//MongoClient.connect(url, function(err, db) {
//  assert.equal(null, err);
//  console.log("Connected correctly to server.");
//  db.close();
//});



exports.index = (req,res) => {
  res.render('home');
};

exports.indexvr = (req,res) =>{
  res.render('indexvr');
}
