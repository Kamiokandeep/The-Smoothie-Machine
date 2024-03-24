/*
CSS Name: The Smoothie Machine
Author: Anndriu U.
Description: Simple form that allows the user to order a smoothie, 
             which includes a number of ingredients and other suitable features. 
             Includes an "order" button that creates a smoothie object and presents it to the customer.
Version: 1.0
*/

//
const bananaBox = document.querySelector('#bananaBox');
//
const bananaCheckbox = document.querySelector('#bananaCheckbox');
const mangoCheckbox = document.querySelector('#mangoCheckbox');
const yogurtCheckbox = document.querySelector('#yogurtCheckbox');
const iceCreamCheckbox = document.querySelector('#iceCreamCheckbox');
const chocolateCheckbox = document.querySelector('#chocolateCheckbox');
const almondMilkCheckbox = document.querySelector('#almondMilkCheckbox');
const sizeSelect = document.querySelector('#sizeSelect');

//
class Smoothie {
    banana;
    mango;
    yogurt;
    iceCream;
    chocolate;
    almondMilk;
    size;
    constructor(banana, mango, yogurt, iceCream, chocolate, almondMilk, size) {
        this.banana = banana;
        this.mango = mango;
        this.yogurt = yogurt;
        this.iceCream = iceCream;
        this.chocolate = chocolate;
        this.almondMilk = almondMilk;
        this.size = size;
    };
    order() {
        // 
        const bananaImg = document.createElement("img");
        // 
        let bananaSrc;
        //
        if (this.banana === true) {
            bananaSrc = "img/glass-cup-fill.svg";
        } else {
            
        }
        //
        bananaImg.setAttribute("src", bananaSrc);
        //
        bananaBox.appendChild(bananaImg);
    }
}

//
bananaCheckbox.addEventListener('change', function() {
    if (this.checked) {
        console.log('Checkbox True');
    } else {
        console.log('Checkbox False');
    }
});

//
function handleButtonClick() {
    //
    const newSmoothie = new Smoothie(true, false, false, false, false, false, false);
    newSmoothie.order();
}

