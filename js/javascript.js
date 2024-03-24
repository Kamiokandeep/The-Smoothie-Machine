/*
CSS Name: The Smoothie Machine
Author: Anndriu U.
Description: Simple form that allows the user to order a smoothie, 
             which includes a number of ingredients and other suitable features. 
             Includes an "order" button that creates a smoothie object and presents it to the customer.
Version: 1.0
*/

//
const imgSmoothie = document.querySelector('#img-smoothie');

//
const bananaBox = document.querySelector('#bananaBox');

//
const cherryCheckbox = document.querySelector('#cherryCheckbox');
const orangeCheckbox = document.querySelector('#orangeCheckbox');
const blackberryCheckbox = document.querySelector('#blackberryCheckbox');
const raspberryCheckbox = document.querySelector('#raspberryCheckbox');
const blueberriesCheckbox = document.querySelector('#blueberriesCheckbox');
const iceCreamCheckbox = document.querySelector('#iceCreamCheckbox');
const chocolateCheckbox = document.querySelector('#chocolateCheckbox');
const mapleSyrupCheckbox = document.querySelector('#mapleSyrupCheckbox');
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
function handleButtonClick() {
    //
    const newSmoothie = new Smoothie(true, false, false, false, false, false, false);
    newSmoothie.order();
}

//
cherryCheckbox.addEventListener('change', function() {
    if (this.checked) {
        imgSmoothie.src = "img/Cherry.png";
    } 
});
//
orangeCheckbox.addEventListener('change', function() {
    if (this.checked) {
        imgSmoothie.src = "img/Orange.png";
    } 
});
