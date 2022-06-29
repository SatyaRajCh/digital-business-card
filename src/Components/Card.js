import React from "react"

export default function Card() {
    return (
        <div className="card container-fluid">
            <img src="./images/profile-pic.jpg" className="card-img-top img-responsive" alt="..."/>
            <div className="dark-card-body">
                <NameDesignation />
                <ButtonLayout />
            </div>
            <div className="description">
                <About />
                <Interests />
            </div>
            <Footer />
        </div>
    )
}

function NameDesignation() {
    return (
        <div className="name-designation">
            <h2 className="card-title">Satya Raj Ch</h2>
            <p className="designation">
                <small>Technical Manager</small>
            </p>
            <p className="website-link">
                <small>Sureify Labs Technology Pvt. Ltd.</small>
            </p>
        </div>
    )
}

function ButtonLayout() {
    return (
        <div className="container-fluid buttons-container">
            <button 
                href="mailto:chsatyaraj93@gmail.com" 
                type="button" 
                className="btn btn-secondary email">
                Email
            </button>
            <button  
                type="button" 
                className="btn btn-primary linked-in">
                <a href="https://www.linkedin.com/in/chsatyaraj/" target={"_blank"}>LinkedIn</a>
            </button>
        </div>
    )
}

function About() {
    return (
        <>
        <h3>About</h3>
        <p><small>I am a full-stack developer turned Technical manager with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</small></p>
        </>
    )
}

function Interests() {
    return (
        <>
        <h3>Interests</h3>
        <p><small>Music lover. Internet fanatic. Travel geek. Coffee fanatic.</small></p>
        </>
    )
}

function Footer() {
    return (
        <div className="footer">
            <a href="https://twitter.com/Raj_Chitrada" target={"_blank"}><img src="./images/twitter-icon.png" /></a>
            <a href="https://www.facebook.com/raj.chitrada" target={"_blank"}><img src="./images/facebook-icon.png" href="facebook.com"/></a>
            <a href="https://www.instagram.com/raj_chitrada" target={"_blank"}><img src="./images/instagram-icon.png" href="instagram.com"/></a>
            <a href="https://github.com/SatyaRajCh" target={"_blank"}><img src="./images/github-icon.png" href="github.com"/></a>
        </div>
    )
}