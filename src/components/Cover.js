import React, { Component } from 'react'
import Landing from './Landing'
import './Cover.css'


export class Cover extends Component {
    render() {
        return (
            <div className="cover">
                <Landing></Landing>
                <div className='sec_title'>
                    <p id="sec1_line1">CREATIVE</p>
                    <p id="sec1_line2">DEVELOPER</p>
                    <img src="https://media4.giphy.com/media/JoVV55m3KZHdxlpFZ6/giphy.gif?cid=ecf05e47z3vz8buneyfzyctbusvjf24njwevx0y6a17cvnve&rid=giphy.gif"></img>
                </div>

                <div className="sec2">
                    <p>intraction animation  accesibilty olso backend developpement <br></br>
                    available for full time hire </p>               
                </div>
             
               
                
            </div>
        )
    }
}

export default Cover
