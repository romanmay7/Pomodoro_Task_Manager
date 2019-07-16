import React, { Component } from 'react';

class About extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return( 
        <div>

        <h2>Pomodoro Technique</h2>
        <div className=" container ">
        <p>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.
            The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by 
            short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped 
            kitchen timer that Cirillo used as a university student.
            The technique has been widely popularized by dozens of apps and websites providing timers and instructions. 
            Closely related to concepts such as timeboxing and iterative and incremental development used in software design,
             the method has been adopted in pair programming contexts.</p></div>

             <h2> Underlying principles</h2>

             <div className=" container "><ol class="list-group ">

            <li class="list-group-item ">1. Decide on the task to be done.</li>
            <li class="list-group-item">2. Set the pomodoro timer (traditionally to 25 minutes).</li>
            <li class="list-group-item">3. Work on the task.</li>
            <li class="list-group-item">4. End work when the timer rings and put a checkmark on a piece of paper.</li>
            <li class="list-group-item">5. If you have fewer than four checkmarks, take a short break (3–5 minutes), then go to step 2. </li>
            <li class="list-group-item">6. After four pomodoros, take a longer break (15–30 minutes), reset your checkmark count to zero, then go to step 1 </li>

             </ol></div>
             <a href="http://en.wikipedia.org/">Source:Wikipedia</a>
        </div>

        );
    }



}

export default About;