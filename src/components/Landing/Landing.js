import React, { Component } from 'react'
import styles from "./Landing.module.css"
import "./Loader2.css"


class Landing extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

 
    render() {
        return (            <div className={`${styles.back}`}>
            <div className={`${styles._homepage}`} >
            
            <div className={`${styles.landing_heading} ${styles.head}`} >
                <h1 className={`${styles.head}`}><span className={`${styles.letter_a} ${styles.anim}`}>A</span>BACUS   '22</h1>
                <h2 className={`${styles.date}`}>March 25 and 26</h2>
            </div>
            {/*

            
                    <div className={`${styles._loader_sign}`}>
                        <span className={`${styles.letter_a} ${styles.glow}`}>a</span>
                        <span className={`${styles.flickerStart}`}>b</span>
                                a<span className={`${styles.flickerStart3}`}>
                            <span className={`${styles.flickerStart}`}>c</span></span>u
                                <span className={`${styles.flickerStart}`}>s</span><span className={`${styles.flickerStart2}`}> '22</span>

                                
                    </div>
                    <div className={`${styles.date}`}>
                            March 25,26,27
                    </div> 
                <HashLink to="/homepage##" spy="true" ><i className=" fa fa-angle-double-down"></i></HashLink> */}

                


            </div>
            </div>
        )
    }
}

export default Landing
