# liri-node-app

<br>
<br>
1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
2. Give a high-level overview of how the app is organized
3. Give start-to-finish instructions on how to run the app
4. Include screenshots, gifs or videos of the app functioning
5. Contain a link to a deployed version of the app
6. Clearly list the technologies used in the app
7. State your role in the app development

What if a user wanted to learn the artist's name of their favorite song? Then what if they wanted to find out if their favorite artist is coming into town? Finally, what if that artist is in movies as well?
<br>
<br>
WELL now there's a way to figure all of that out.
<br>
<br>
<h1>Overview</h1>
<br>
In here we are using the technologies of:
<ul>
    <li>Inquirer</li>
    <li>Axios</li>
    <li>Spotify's NPM API</li>
    <li>Bands in Town's API</li>
    <li>Moment.js's NPM</li>
    <li>OMDB's API</li>
</ul>
<br>
<br>
<ol>
    <li>Inquirer<br>
    This is used to record the input of the user using node as an interface between the scripts and the user
    </li>
    <li>Axios<br>
        <ul>
            <li>This is being used in replacement of fetch</li>
            <li>Used to grab the user specific information from the Bands in Town API</li>
            <li>Used to grab the user specific information from OMDB's API</li>
        </ul>
    </li>
    <li>Spotify's NPM<br>
    Information is given back to the user after they have inputted which song they would like to look up<br>
    </li>
</ol>
<br>
<br>
<h1>Run Through</h1>
<ol>
    <li>first clone the repo from <h6>https://github.com/daniel-thao/liri-node-app<</h6></li>
    <li>Then open the program in your terminal by being in this directory <h6>liri-node-app/liri.js</h6></li>
    <li>Then run node and the file</li>
    <li>Once you run the application, You are presented with four choices</li>
        <ol>
            <li>Song</li>
            <li>Movies</li>
            <li>Current Music Tours</li>
            <li>Nothing</li>
        </ol>
    <li>If you choose Song, you will be presented with a question of what song you would like to view
        <br>
        <ol>
            <li>If you choose nothing, then you will be given a default song
                <img src="assets/Vid1.gif"><br><br></li>
            <li>This is what happens when you input a song title
            <img src="assets/Vid1.1.gif"><br><br></li>
        </ol>
    </li>
    <li>If you choose Movie, you will be asked to input what movie you're looking for</li>
        <br>
        <ol>
            <li>If you choose nothing, then you will be given a default movie
                <img src="assets/Vid2.gif"><br><br></li>
            <li>This is what happens when you input a movie title
            <img src="assets/Vid2.1.gif"><br><br></li>
        </ol>
    <li>If you chose Current Music Tour, you will be asked to input an artist</li>
        <br>
        <ol>
            <li>If you choose nothing, then you will be given a default artist's concert tour schedule
                <img src="assets/Vid3.gif"><br><br></li>
            <li>This is what happens when you input an artist
            <img src="assets/Vid3.1.gif"><br><br></li>
        </ol>
    <br>
    <li><h3>Place make sur eyour spelling is correct</h3></li>
    <br>
    <li>Finally if you choose to do nothing, your computer will subsequently crash, no recovery, super shutdown<br>
    I don't reccommend on choosing that option
        <br>
        <img src="assets/Vid4.gif"><br><br></li>
    </li>
</ol>
<br>
<br>
<h6>Well that's the app<h6>
<h4>I, Daniel Thao built the whole thing</h4>




            