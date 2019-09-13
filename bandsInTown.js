const axios = require("axios");
const fs = require("fs");

const moment = require("moment")

// Create the TV constructor
const ArtistChoice = function() {
  // divider will be used as a spacer between the tv data we print in log.txt
  const dividerTop = "\n========================================\n";
  const dividerBot = "\n===========================";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.findTour = function(artist) {
    const URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(URL).then(function(response) {
        const data = response.data


        for(let i = 0; i < data.length; i++) {
            const tourEvents = [];
            const venueLocation = [];

            venueLocation.push(data[i].venue.city, data[i].venue.region)
            tourEvents.push(data[i].venue.name, venueLocation.join(", "), moment(data[i].datetime).format("MM/DD/YYYY"));


            console.log(dividerTop + tourEvents.join("\n") + dividerBot);

        }

    });
  };
};

module.exports = ArtistChoice;
