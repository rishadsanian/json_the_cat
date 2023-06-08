const request = require("request");

const catInfo = () => {
  let name = process.argv.slice(2);
  let url = "https://api.thecatapi.com/v1/breeds/search?q=" + name;

  request(url, (error, response, body) => {
    if (error) {
      //Edge Case: Request Failed
      console.log("Request Failed");
      //console.log(error);

      process.exit;
      return;
    }
    const data = JSON.parse(body);
    //Edge Case: Breed Not Found
    data[0] === undefined
      ? console.log("Breed not Found")
      : console.log(data[0].description);
  });
};
catInfo();
