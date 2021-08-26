import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these delicious recipes</h1>
            <div className="cards__container">
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
    )
}

export default Cards
