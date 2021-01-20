import React, { Component } from 'react'
import './Projects.css'


export class Projects extends Component {
    render() {
        return (
            <div className="sec_layout">
            <div className="page_title"> <h1>PROJECTS</h1></div>
            <div className="projects_content">

             <div className="box1 box_flex">
                 <div className="faded">
                 <h1>ColorView</h1>
                 <img src="https://github.com/HichemSaidi/punch/raw/master/images/demo.png"></img>
                 <p>Relased on November 2019</p>
                 <p> this project is a static website using flexbox</p>
                 </div>
             </div>

             <div className="box2 box_flex">
             <div className="faded">

             <h1>ColorView</h1>
                 <img src="https://github.com/HichemSaidi/punch/raw/master/images/demo.png"></img>
                 <p>Relased on November 2019</p>
                 <p> this project is a static website using flexbox</p>
             </div>
             </div>

             <div className="box3 box_flex">
             <div className="faded">

             <h1>ColorView</h1>
                 <img src="https://github.com/HichemSaidi/punch/raw/master/images/demo.png"></img>
                 <p>Relased on November 2019</p>
                 <p> this project is a static website using flexbox</p>
             </div>
             </div>
             
        </div>
        </div>

        )
    }
}

export default Projects
