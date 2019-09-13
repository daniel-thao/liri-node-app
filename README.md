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

So this is an app that takes in the user's input and spits out information based on what they wanted to know
<br>
In this case, it's finding information about songs, movies, and concert dates
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


