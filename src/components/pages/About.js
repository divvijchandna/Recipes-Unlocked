import React from 'react'
import '../../components/Cards.css'

export default function About() {
    return (
        <div className="bg">
            <h1>ABOUT US</h1>
            <div className="container">
                <div className="about">
                    <img src="images/img-about.jpg" alt="" className="about-img"/>
                    <div>    
                    <h1 className="about-desc">The Story of Recipes Unlocked</h1>
                    <p>Recipes Unlocked specializes in creating dishes with fresh, quality ingredients. When they’re not whipping up fabulous recipes, they can be found exploring great ethnic neighborhoods in San Francisco, discovering new inspirations to share with you. So whether you’re looking for someone to help you plan an event or simply refresh your menu, reach out today.</p>
                    </div>
                </div>
            </div>
            <div className="cards"></div>
        </div>
    );
}