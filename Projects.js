import React from 'react';

import grove from '../../assets/GroveScreenshot.JPG';
import workdayScheduler from '../../assets/WorkdayScreenshot.JPG';
import teamGenerator from '../../assets/TeamScreenshot.JPG';
import movieReader from '../../assets/MovieScreenshot.JPG';
import randomPassword from '../../assets/PasswordScreenshot.JPG';

export default function Projects() {
<div className="page">
            <h2 id="projects">Projects</h2>
                <div className="container">
                    <a href="http://obscure-ocean-20287.herokuapp.com/"><img className="item" id="item-1" src={grove} alt="The webpage for the deployed Grove application"></img></a>
                    <p>Grove: A site built by and for consumers, using HTML, Handlebars, CSS, JavaScript, Express.js, and more, to leave reviews on the sustainability practices of commercial companies</p>
                    <p><a href="https://github.com/lapshaffer/SustainableReviewsProject" className="repo" target="_blank" rel="noopener noreferrer">GitHub Project Respository</a></p>
                    <br />
                    <a href="https://lapshaffer.github.io/ShafferWorkDayScheduler/"><img className="item" id="item-2" src={workdayScheduler} alt="The webpage for the deployed Workday Scheduler application"></img></a>
                    <p>Workday Scheduler: A day planner, written using HTML, CSS, JavaScript and Moment, designed to help the user schedule their day</p>
                    <p><a href="https://github.com/lapshaffer/ShafferWorkDayScheduler" className="repo" target="_blank" rel="noopener noreferrer">GitHub Project Respository</a></p>
                    <br />
                    <a href="https://github.com/lapshaffer/ShafferTeamProfileGenerator"><img className="item" id="item-3" src={teamGenerator} alt="The webpage created by the Team Profile Generator application"></img></a>
                    <p>Team Profile Generator: A command-line application written in JavaScript, HTML and CSS, using the Inquirer package, to take in employee information and create a webpage for a development team</p>
                    <p><a href="https://github.com/lapshaffer/ShafferTeamProfileGenerator" className="repo" target="_blank" rel="noopener noreferrer">GitHub Project Respository</a></p>
                    <br />
                    <a href="https://lapshaffer.github.io/MovieReaderProject/"><img className="item" id="item-4" src={movieReader} alt="The webpage for the deployed Movie Reader application"></img></a>
                    <p>Movie Reader: A one-stop site, created with HTML, CSS, JS and Materialize, to view movie information, reviews, and recommendations</p>
                    <p><a href="https://github.com/lapshaffer/MovieReaderProject" className="repo" target="_blank" rel="noopener noreferrer">GitHub Project Respository</a></p>
                    <br />
                    <a href=" https://lapshaffer.github.io/ShafferPasswordGenerator/"><img className="item" id="item-5" src={randomPassword} alt="The webpage for the deployed Password Generator application"></img></a>
                    <p>Password Generator: A password generator, written with JavaScript, designed to randomly generate a password based on user inputs</p>
                    <p><a href="https://github.com/lapshaffer/ShafferPasswordGenerator" className="repo" target="_blank" rel="noopener noreferrer">GitHub Project Respository</a></p>       
                </div>
        </div>
};
