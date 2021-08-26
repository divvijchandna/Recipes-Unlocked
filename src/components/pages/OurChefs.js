import React from 'react'
import CardItem from '../../components/CardItem'
import '../../components/Cards.css'

export default function OurChefs() {
    return (
        <div className="bg">
            <div className='cards'>
                <h1>OUR CHEFS</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem 
                                src="images/img-1.jpg"
                                text="Kaveri Bhatia"
                                label='Chef'
                                path='/kaveri'
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