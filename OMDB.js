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
    const URL = "http://www.omdbapi.com/?t=" + movie + "&apikey=" + API;
    // "https://www.omdbapi.com/?t=romancing+the+stone&y=&plot=short&apikey=trilogy"

    // console.log("\n\n\n" + URL + "\n\n\n");

    axios.get(URL).then(function(response) {
      // Place the response.data into a variable, jsonData.
        // if(error) {
        //     console.log(error);
        //     console.log("\n\n\n\n\n YEAH IDK IF THIS IS ACTUALLY BEING PRINTED TOO \n\n\n\n\n");
        // }
        // else {
        //     console.log(response);
        // }
        const data = response.data
        console.log(data);
 

    //   // Append showData and the divider to log.txt, print showData to the console
    //   fs.appendFile("random.txt", showData + divider, function(err) {
    //     if (err) throw err;
    //     console.log(showData);
    //   });
    });
  };
};

module.exports = MovieChoice;