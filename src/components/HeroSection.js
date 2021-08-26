import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src='videos/video-2.mp4' autoPlay loop muted /> */}
            <h1>RECIPES UNLOCKED</h1>
            <p>Truly Homemade</p>
            <p className='caption'>The dishes we cooked for our homes, making the lockdown experience easier and tastier</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' buttonLink='/about'>
                    ABOUT
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
