const axios = require("axios");
const fs = require("fs");

// Create the TV constructor
const ArtistChoice = function() {
  // divider will be used as a spacer between the tv data we print in log.txt
  const dividerTop = "\n========================================\n";
  const dividerBot = "\n===========================\n\n\n";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.findTour = function(artist) {
    const URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(URL).then(function(response) {
        const data = response.data

        console.log(data)


        // console.log(dividerTop + movieInfo.join("\n") + dividerBot);

    });
  };
};

module.exports = ArtistChoice;
