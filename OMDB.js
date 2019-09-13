const axios = require("axios");
const fs = require("fs");

// Create the TV constructor
const MovieChoice = function() {
  // divider will be used as a spacer between the tv data we print in log.txt
  const dividerTop = "\n========================================\n";
  const dividerBot = "\n===========================\n\n\n";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.findMovie = function(movie) {
    const API = "trilogy"
    // let movie = "inception"
    const URL = "http://www.omdbapi.com/?apikey=" + API + "&?t=" + movie;

    axios.get(URL).then(function(response) {
      // Place the response.data into a variable, jsonData.
        console.log(response);
 

    //   // Append showData and the divider to log.txt, print showData to the console
    //   fs.appendFile("random.txt", showData + divider, function(err) {
    //     if (err) throw err;
    //     console.log(showData);
    //   });
    });
  };
};

module.exports = MovieChoice;
