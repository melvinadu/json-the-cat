const request = require('request')

const fetchBreedDescription = function(breedName, callback) {
  
  

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback(null);
      return
    }
    if (error) {
      console.log("API Error", error.message);
      return
    }

    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
  
    callback(null, data[0].description);  
    

  });

};

module.exports = { fetchBreedDescription } ;
