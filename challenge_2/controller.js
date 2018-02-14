var express = require('express')
var json2csv = require('json2csv');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
    get: function (req, res) {
      console.log('Success GET!');
      //console.log(typeof req.body);


      res.set(headers).status(200).send(JSON.stringify("hello"));
    }, 
    post: function (req, res) { 
    	res.status = 201;
      console.log('Success POST!');
      var result = json2csv(
      	{data: req.body,
      		fields: ["firstName", "lastName", "county", "city", "role", "sales", "children"]
      	});
      console.log(req.body);
      console.log(result);
      res.json(result);

    	//res.json(flattenObject(req.body));
    }
 
};

// module.exports = controller;


