import React, { Component } from 'react'
import './Contact.css'
import Landing from './Landing'


export class Contact extends Component {
    render() {
        return (
            <div className="sec_layout">
              
            
                <div className="page_title"> <h1>CONTACT</h1> </div>
                
                <div className="rowed">
                
                <img src="https://henry.codes/_nuxt/img/8ffe88e.svg"></img>   
            
           
                  <div className="contact_bio"> 
                  <p> I’m most active and reachable on 
                    Linkedin or via email, but you can 
                    find me most places on the internet 
                    as @ishmv12. You can also check out 
                    my resume.</p>  
                   
                    </div>
                      <div className="socials">
                      <div>
                            <strong>LINKEDIN</strong>
                            <p> This social network is the one i use to find job offers and 
                            you can find my current situation there.
                           </p>
                      </div>
                      <div>
                            <strong>GITHUB</strong>
                            <p>Open-source contribution and shared projects. Most
                                of my personnal projects are public repos here!
                            </p>

                      </div> 
                      
                      </div>
                </div>
                
                 
            </div>
        )
    }
}

export default Contact
