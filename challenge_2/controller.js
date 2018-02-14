var express = require('express')
// var json2csv = require('json2csv');

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

      //res.set(headers).status(200).send(JSON.stringify(flattenObject(req.body)));
      //res.json(flattenObject(req.body));
    }, 
    post: function (req, res) { 
    	res.status = 201;
      console.log('Success POST!');
    	console.log(createHtml(flattenObject(req.body)))
      res.json(createHtml(flattenObject(req.body)));
     	}
 
};


var flattenObject = function(object) {
	var results = [];

	results.unshift(Object.keys(object).slice(0, Object.keys(object).length - 1).join(','));

	var flattenLevel = function(childObj) {
		if (childObj.children.length === 0) {
			results.push(Object.values(childObj).filter(x => typeof x!= "object").join(','));
			return;
		}	else {
			results.push(Object.values(childObj).filter(x => typeof x!= "object").join(','));
			childObj.children.forEach( function(eachChildObj) {
				flattenLevel(eachChildObj);
			});
		};
	}
	flattenLevel(object);
	return results;
}

var createHtml = function(csvTextArray) {
	return csvTextArray.map( x => `<div>${x}</div>` ).join('')
}