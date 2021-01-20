import React, { Component } from 'react'
import './Contact.css'
import Landing from './Landing'


export class Contact extends Component {
    render() {
        return (
            <div className="sec_layout">
              
            
                <div className="page_title"> <h1>CONTACT</h1> </div>
                
                <div className="rowed">
                
                <img src="https://i.pinimg.com/originals/7d/bf/d8/7dbfd84f1ccd556db7bfbab38d6557cd.gif"></img>   
            
           
                  <div className="contact_bio"> 
                  <p> I’m most active and reachable on <a href="https://www.linkedin.com/in/hichem-saidi-78029a197/" target="_blank">Linkedin</a> or 
                  via <a href=" mailto: hichem-saidi94@live.fr">Email</a>
                    , but you can 
                    find me most places on the internet 
                    as <a href="https://unsplash.com/@ishmv12/" target="_blank">@ishmv12</a> . You can also check out 
                    my resume.</p>  
                   
                    </div>
                      <div className="socials">
                      <div>
                      <a href="https://www.linkedin.com/in/hichem-saidi-78029a197/" target="_blank"><strong>LINKEDIN</strong></a>    
                            <p> This social network is the one i use to find job offers and 
                            you can find my current situation there.
                           </p>
                      </div>
                      <div>
                      <a href="https://github.com/HichemSaidi" target="_blank"><strong>GITHUB</strong></a>    
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
