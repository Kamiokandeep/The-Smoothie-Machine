/*
CSS Name: The Smoothie Machine
Author: Anndriu U.
Description: Simple form that allows the user to order a smoothie, 
             which includes a number of ingredients and other suitable features. 
             Includes an "order" button that creates a smoothie object and presents it to the customer.
Version: 1.0
*/

/* ------------------------------

    ------------------------------ */
const cherryCheckbox = document.getElementById('cherryCheckbox');
const orangeCheckbox = document.getElementById('orangeCheckbox');
const blackberryCheckbox = document.getElementById('blackberryCheckbox');
const raspberryCheckbox = document.getElementById('raspberryCheckbox');
const blueberriesCheckbox = document.getElementById('blueberriesCheckbox');
const iceCreamCheckbox = document.getElementById('iceCreamCheckbox');
const chocolateCheckbox = document.getElementById('chocolateCheckbox');
const mapleSyrupCheckbox = document.getElementById('mapleSyrupCheckbox');
const imgSmoothie = document.getElementById('img-smoothie');
const orderButton = document.getElementById('orderButton');

/* ------------------------------

    ------------------------------ */
class Smoothie {
    cherry;
    orange;
    blackberry;
    raspberry;
    blueberries;
    iceCream;
    chocolate;
    mapleSyrup;
    constructor(cherry, orange, blackberry, raspberry, blueberries, iceCream, chocolate, mapleSyrup) {
        this.cherry = cherry;
        this.orange = orange;
        this.blackberry = blackberry;
        this.raspberry = raspberry;
        this.blueberries = blueberries;
        this.iceCream = iceCream;
        this.chocolate = chocolate;
        this.mapleSyrup = mapleSyrup;
    };
    order() {
        /* ------------------------------

           ------------------------------ */
        let fruit = "Fruit Mix";
        let iceCream = "";
        let chocolate = "";
        let mapleSyrup = "";
        /* ------------------------------

           ------------------------------ */
        if (this.cherry === true) {
            fruit = "Cherry";
        } else if (this.orange === true) {
            fruit = "Orange";
        } else if (this.blackberry === true) {
            fruit = "Blackberry";
        } else if (this.raspberry === true) {
            fruit = "Raspberry";
        } else if (this.blueberries === true) {
            fruit = "Blueberries";
        }
        /* ------------------------------

           ------------------------------ */
        if (this.iceCream === true) {
            iceCream = "Ice Cream + ";
        } else {
            iceCream = "";
        }
        if (this.chocolate === true) {
            chocolate = "Chocolate + ";
        } else {
            chocolate = "";
        }
        if (this.mapleSyrup === true) {
            mapleSyrup = "Maple Syrup + ";
        } else {
            mapleSyrup = "";
        }
        /* ------------------------------

           ------------------------------ */
        const title = document.getElementById("title");
        const description = `Your smoothie with ${fruit} + ${iceCream} ${chocolate} ${mapleSyrup} Our secret touch is preparing and will be ready to pick up in 10 minutes.`;
        title.innerText = description;
        title.style.fontSize = "42px";
        title.style.fontFamily = "Handlee", cursive;
    }    
}

/* ------------------------------

   ------------------------------ */
cherryActive = false;
orangeActive = false;
blackberryActive = false;
raspberryActive = false;
blueberriesActive = false;
iceCreamActive = false;
chocolateActive = false;
mapleSyrupActive = false;

/* ------------------------------

   ------------------------------ */
cherryCheckbox.addEventListener('change', function() {
    if (this.checked) {
        imgSmoothie.src = "img/Cherry.png";
        cherryActive = true;
        orderButton.disabled = false;
    } else {
        cherryActive = false;
    }
});
orangeCheckbox.addEventListener('change', function() {
    if (this.checked) {
        imgSmoothie.src = "img/Orange.png";
        orangeActive = true;
        orderButton.disabled = false;
    } else {
        orangeActive = false;
    }
});
blackberryCheckbox.addEventListener('change', function() {
    if (this.checked) {
        imgSmoothie.src = "img/Blackberry.png";
        blackberryActive = true;
        orderButton.disabled = false;
    } else {
        blackberryActive = false;
    }
});
raspberryCheckbox.addEventListener('change', function() {
    if (this.checked) {
        imgSmoothie.src = "img/Raspberry.png";
        raspberryActive = true;
        orderButton.disabled = false;
    } else {
        raspberryActive = false;
    }
});
blueberriesCheckbox.addEventListener('change', function() {
    if (this.checked) {
        imgSmoothie.src = "img/Blueberries.png";
        blueberriesActive = true;
        orderButton.disabled = false;
    } else {
        blueberriesActive = false;
    }
});
iceCreamCheckbox.addEventListener('change', function() {
    if (this.checked) {
        iceCreamActive = true;
        orderButton.disabled = false;
    } else {
        iceCreamActive = false;
    }
});
chocolateCheckbox.addEventListener('change', function() {
    if (this.checked) {
        chocolateActive = true;
        orderButton.disabled = false;
    } else {
        chocolateActive = false;
    }
});
mapleSyrupCheckbox.addEventListener('change', function() {
    if (this.checked) {
        mapleSyrupActive = true;
        orderButton.disabled = false;
    } else {
        mapleSyrupActive = false;
    }
});


/* ------------------------------

   ------------------------------ */
function buttonClick() {
    //
    const newSmoothie = new Smoothie(cherryActive, orangeActive, blackberryActive, raspberryActive, blueberriesActive, iceCreamActive, chocolateActive, mapleSyrupActive);
    newSmoothie.order();
}
