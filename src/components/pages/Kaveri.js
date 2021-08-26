import React from 'react'
import CardItem from '../../components/CardItem'
import '../../components/Cards.css'

function Kaveri() {
    return (
        <div className="bg">
            <h1>KAVERI BHATIA</h1>
            <div className="container">
                <div className="chef-about">
                    <img src="images/img-1.jpg" alt="" className="chef-img"/>
                    <p>Lets start with my first encounter to fancy food…Mumbai 1995..Prem Kutir Marine Drive..I had gone to visit my cousin and his newly wedded wife..Pb..to keep us busy she very sweetly decided to let us watch her whip up some delicious food…that is where my love story with cooking started…</p>
                </div>
            </div>
            <div className='cards'>
                <h2>My Recipes</h2>
                <div className="cards__container__start">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem 
                                src="images/chicken-maryland.jpg"
                                text="Chicken Maryland"
                                label='Kaveri'
                                path='/chicken-maryland'
                            />
                            <CardItem 
                                src="images/chicken-maryland.jpg"
                                text="Chicken Maryland"
                                label='Kaveri'
                                path='/chicken-maryland'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kaveri
