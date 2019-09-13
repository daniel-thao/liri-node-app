// This is here so we need the .env file
require("dotenv").config();
// This is to access the key.js file
// const keys = require("./keys.js");
// // This is used to ge the information from Spotify
// const nodeSpotify = require("node-spotify-api");
// This is to get the information from the File System
// const fs = require("fs");

// This gets the info for Inquirer
const inquirer = require("inquirer");

// =========================================
// This is the export to the spotify js
const SpotifyCall = require("./spotifyCall.js");

// This is the export for the OMDB
const MovieChoice = require("./OMDB.js");




inquirer
.prompt([
    {
        name: "search",
        message: "What are you searching for?",
        type: "list",
        choices: ["Song", "Movie", "Current Music Tours"]
    },
]).then(function (answer) {
    secondQuestion(answer);
})



function secondQuestion(answer) {
    if (answer.search === "Song") {
        inquirer
        .prompt([
            {
                name: "whatSong",
                message: "What song are you searching for?"
            },
        ]).then(function (answer) {
            const song = answer.whatSong
            const spotify = new SpotifyCall();

            if(song === "") {
                spotify.findSongByTrack("ISIS")
            }
            else{           
                spotify.findSongByTrack(song);
                console.log(song);
            }


        })
    }


    // =========================================
    // =========================================
    if(answer.search === "Movie") {
        inquirer
        .prompt([
            {
                name: "whatMovie",
                message: "What movie are you searching for?"
            },
        ]).then(function (answer) {
            const movie = answer.whatMovie
            const OMDB = new MovieChoice();

            if(movie === "") {
                OMDB.findMovie("Inception")
            }
            else{           
                OMDB.findMovie(movie);
                console.log(movie);
            }
        })
    }
    // console.log(answer.search)
}

// ===========================================================================================================================
// ===========================================================================================================================

 










// // ===========================================================================================================================
// // ===========================================================================================================================
// const dividerTop = "\n========================================\n";
// const dividerBot = "\n===========================\n\n\n";



// const Spotify = function () {
//     // findShow takes in the name of a tv show and searches the tvmaze API
//     this.findSongByTrack = function (song) {
//         const songSearch = new nodeSpotify(keys.spotify);
//         // console.log("THIS IS THE songSEARCH VAR\n\n", songSearch, "\n\nTHIS is the spotify Variable");

//         songSearch.search({ type: 'track', query: song, limit: 1 }, function (error, data) {
//             // The error comes first, eveen before creating variables because NODE handles the error info first and then handles the data
//             if (error) {
//                 return console.log('Error occurred: ' + error);
//             }

//             // ================================
//             // This holds all the info I need to print out on the random.txt
//             const songInfo = [];

//             // If a song has multiple artists, it will be put here and then created into one string and put into songInfo
//             const pluralArtists = [];

//             // This is to save typing
//             const response = data.tracks.items[0];

//             // Took awhile to find this, but finally, can push this info to the array
//             // NAME OF SONG
//             songInfo.push(response.name);

//             // PUSHING Artist(s)
//             // FOR MULTIPLE ARTISTS
//             if (Array.isArray(response.artists) === true) {
//                 for (let i = 0; i < response.artists.length; i++) {
//                     // console.log(response.artists[i].name);
//                     pluralArtists.push(response.artists[i].name);
//                 }
//                 // pluralArtists.join(", ");
//                 songInfo.push(pluralArtists.join(", "))
//             }
//             // FOR ONE ARTIST
//             else {
//                 response.artists.name;
//                 songInfo.push(response.artists.name);
//             }

//             // Push the preview url
//             songInfo.push(response.preview_url);

//             // push the album name
//             songInfo.push(response.album.name);

//             // THIS IS FOR ME
//             console.log(songInfo);

//             fs.appendFile("random.txt", dividerTop + songInfo.join("\n\n") + dividerBot, function (error) {
//                 // If the code experiences any errors it will log the error to the console.
//                 if (error) {
//                     return console.log(error);
//                 }

//                 // Otherwise, it will print: "movies.txt was updated!"
//                 console.log("random.txt was updated!");

//             });
//         })

//     };
// }

// // const spotify = new Spotify(keys.spotify);
// // spotify.findSongByTrack("Zanies and Fools");