import React from 'react'
import './Recipe.css';

const Recipe = ({title, chef, image, ingredients, method}) => {
    return(
        <div className='recipe'>
            <h1 className='title'>{title}</h1>
            <h2 className='chef'>{chef}</h2>
            <img src={image} alt="Chicken Maryland" className='image'/>
            <p className='sub-heading'>Ingredients</p>
            <ul className='list'>{ingredients}</ul>
            <p className='sub-heading'>Method</p>
            <ul className='list'>{method}</ul>
        </div>
    );
}

export default Recipe