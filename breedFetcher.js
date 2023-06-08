const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(
    "https://api.thecatapi.com/v1/breeds/search?q=" + breedName,
    (error, response, body) => {
      if (error) {
        //Edge Case: Request Failed
        callback("Request Failed");
        return;
      }
      const data = JSON.parse(body);

      //Edge Case: Breed Not Found
      if (data.length === 0) {
        return callback("Breed not found");
      }
      callback(null, data[0].description);
    }
  );
};

module.exports = { fetchBreedDescription };
