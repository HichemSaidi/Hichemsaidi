import React, { Component } from 'react'
import './About.css'
import pic from './Hichempic.png'


export class About extends Component {
    render() {
        return (

             <div className="sec_layout">
                <div className="page_title"> <h1>ABOUT</h1></div>
               
               
                <div className="sec_about">

                    <div className="sec_about_left">     
                      <h1 className="about_title">HEY THERE I'M HICHEM SAIDI</h1>
                      <div className="sub_about_left">
                          <p>I’m a creative developer currently based in Montpellier, France. I’m really into CSS, animation, developer experience, and deleting code.
                            I love bending the rules of CSS, making generative art, and playing with WebGL. I have a lot of experience with style code at scale, JS-agnostic
                             design systems, and static site generators. In my non-code time, I’ve recently taken an amazing opportunity with Faculty, Doing Good Work for the web. I’m currently available for freelance work.</p>
                    <img src="https://henry.codes/_nuxt/img/47dd65e.svg"></img>
                      </div>
                    </div>

                    <div className="sec_about_right">
                        <img src={pic}></img>
                        
                    </div>
                           
                </div>
            </div>
    
        )
    }
}

export default About
