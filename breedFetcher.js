const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    const data = JSON.parse(body);
    
    if (data.length < 1) {
      callback("Please input a breed into the command line", null);
      return;
    }
   
    callback(error, data[0].description);  


    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
  
    
    // const data = JSON.parse(body);
    // let desc;
    // if (data[0] === undefined) {
    //   error = "no such breed";
    //   desc = null;
    // } else {
    //   desc = data[0].description;
    // }
    // callback(error, desc);

  });
};

module.exports = { fetchBreedDescription } ;
