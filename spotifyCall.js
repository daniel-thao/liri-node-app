// This is used to ge the information from Spotify
const nodeSpotify = require("node-spotify-api");
// Had to move this from the liri.js file because it wasn't being called over there
const keys = require("./keys.js");
// Same with this, had to move the file System thing over here because of it being used here.
const fs = require("fs");



// ===========================================================================================================================
// ===========================================================================================================================
const dividerTop = "\n========================================\n";
const dividerBot = "\n===========================\n\n\n";



const SpotifyCall = function () {
    // findShow takes in the name of a tv show and searches the tvmaze API
    this.findSongByTrack = function (song) {
        const songSearch = new nodeSpotify(keys.spotify);
        // console.log("THIS IS THE songSEARCH VAR\n\n", songSearch, "\n\nTHIS is the spotify Variable");

        songSearch.search({ type: 'track', query: song, limit: 1 }, function (error, data) {
            // The error comes first, eveen before creating variables because NODE handles the error info first and then handles the data
            if (error) {
                return console.log('Error occurred: ' + error);
            }

            // ================================
            // This holds all the info I need to print out on the random.txt
            const songInfo = [];

            // If a song has multiple artists, it will be put here and then created into one string and put into songInfo
            const pluralArtists = [];

            // This is to save typing
            const response = data.tracks.items[0];

            // Took awhile to find this, but finally, can push this info to the array
            // NAME OF SONG
            songInfo.push(response.name);

            // PUSHING Artist(s)
            // FOR MULTIPLE ARTISTS
            if (Array.isArray(response.artists) === true) {
                for (let i = 0; i < response.artists.length; i++) {
                    // console.log(response.artists[i].name);
                    pluralArtists.push(response.artists[i].name);
                }
                // pluralArtists.join(", ");
                songInfo.push(pluralArtists.join(", "))
            }
            // FOR ONE ARTIST
            else {
                response.artists.name;
                songInfo.push(response.artists.name);
            }

            // Push the preview url
            if(response.preview_url === null) {
                songInfo.push("Preview is Not Avaliable");
            }
            else {songInfo.push(response.preview_url);}

            // push the album name
            songInfo.push(response.album.name);

            // THIS IS FOR ME
            // console.log(songInfo);

            // This is the ASSINGMENT?
            console.log(dividerTop + songInfo.join("\n\n") + dividerBot);

            // fs.appendFile("random.txt", dividerTop + songInfo.join("\n\n") + dividerBot, function (error) {
            //     // If the code experiences any errors it will log the error to the console.
            //     if (error) {
            //         return console.log(error);
            //     }

            //     // Otherwise, it will print: "movies.txt was updated!"
            //     console.log("random.txt was updated!");
            // });
        })

    };
}

module.exports = SpotifyCall;

// const spotify = new Spotify(keys.spotify);
// spotify.findSongByTrack("Zanies and Fools");