import React from 'react'
import Recipe from '../Recipe'

function ChickenMaryland() {

    const ingredients = ['3 Chicken Breast Boneless Filleted into 6 pcs', '1 Cup Flour', '1/2 Cup Milk', '2 Eggs', '1 Tsp Salt', '1/2 Tsp Pepper', '2 Cups Bread Crumbs', 'Butter and Oil ( for shallow frying)', '2 Tbsp Flour', '2 Cup Milk', '2 Tbsp Butter', '6 Tbsp grated cheese']
    const listIngredients = ingredients.map((ingredient) =>
        <li>{ingredient}</li>
    );

    const steps = ['Heat butter in a pan.', 'Add flour and cook till it changes colour.', 'Remove from gas, add milk slowly while mixing continuously so that no lumps are formed.', 'Put back on gas, add the cheese, salt and pepper and cook till slightly thick.', 'Sift the flour, salt and pepper.', 'Dip the chicken breasts in milk, then in the sifted flour, then in beaten eggs and finally roll them in bread crumbs till well coated.', 'Shallow fry each fillet in about a tbsp each of butter and oil.', 'Serve with some cheesy white sauce']
    const listSteps = steps.map((step) =>
        <li>{step}</li>
    );

    return (
        <>
            <Recipe 
                key="kaveri1"
                title="Chicken Maryland" 
                chef="Kaveri Bhatia" 
                image="images/chicken-maryland.jpg"
                method={listSteps}
                ingredients={listIngredients}/>
        </>
    )
}

export default ChickenMaryland
