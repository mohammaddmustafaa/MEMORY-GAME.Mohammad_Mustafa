//!                                                                                                       MEMORY GAME

function game() {
    // Cards array
    const cards = document.querySelectorAll('.card');
    const startButtonText = document.getElementById('startGameText');
  
    let userPathesArr = [];
    let wrongFlipArr = [];

    function start() {
        // Start the game when the button is clicked
        startButtonText.addEventListener("click", gameStart);
    }

    function gameStart () {
        // Change button color and add click event listeners to cards
        startButtonText.style.backgroundColor = "greenyellow";
        cards.forEach(card => card.addEventListener('click', flip));
    }

    function flip () {
        // Handle card flipping
        const path = this.querySelector("path").getAttribute("id");
        const flipped = this.classList.contains('flip');

        if (!flipped) {
            // Toggle the flip class, store path, and handle flipping back
            this.classList.toggle('flip');
            userPathesArr.push(path);
            wrongFlipArr.push(this);
            isNewLevel();
        }
    }

    function end() {
        // Reset the game when two wrong cards are selected
        userPathesArr = [];
        flipOut(500);
    }

    function isNewLevel () {
        // Compare selected cards and act accordingly
        if (userPathesArr.length === 2) {
            if (userPathesArr[0] === userPathesArr[1]) {
                return newLevel();
            }
            return end();
        }
    }

    function newLevel () {
        // Prepare for a new level
        userPathesArr = [];
        wrongFlipArr = [];
        checkForWin();
    }

    function checkForWin () {
        // Check if all cards are flipped to determine a win
        const allCardsFlipped = Array.from(cards).every(card => card.classList.contains('flip'));

        if (allCardsFlipped) {
            // Display a win message
            const h1Element = document.createElement('h1');
            startButtonText.insertAdjacentElement('afterend', h1Element);
            h1Element.textContent = 'You Win';
            h1Element.style.display = 'flex';
            h1Element.style.justifyContent = 'end';
            h1Element.style.alignItems = 'center';
            h1Element.style.width = '18rem';
        }
    }

    function flipOut (time) {
        // Flip back the wrong cards after a delay
        setTimeout(() => {
            wrongFlipArr.forEach(card => card.classList.remove('flip'));
            wrongFlipArr = [];
        }, time);
    }

    start();
}

game();


//! ___________________The Game with more comments details ,(down bellow => function game(){...})__________________


function game() {

    const cards = document.querySelectorAll('.card');  //cardsArr 
    const startButtonText = document.getElementById('startGameText');         // Start Game Button
    
    let userPathesArr = [];     // user click  == compare list
    let wrongFlipArr = [];    //  wrong cards need to flipout

    function start() {       // The start function
        startButtonText.addEventListener("click", gameStart);
    }

    function gameStart () {     // while the game runinng
        startButtonText.style.backgroundColor = "greenyellow";  // change the color to know the game is started 
        cards.forEach(card => card.addEventListener('click', flip)); // to know when the user is click on the card
    }   

    function flip () {      // flip Genrator filter ( to know what should flip and what not , to get the pathes for compare )
        const path = this.querySelector("path").getAttribute("id"); //  get pathes for compare  : return string that's inside the id Attribute
        const flipped = this.classList.contains('flip');            //  to check if the card is flipped : return boolien
        
        if (!flipped){      // if the flipped is not true we flip the card . if its true then we skip and go back to the gameStart to wait for anther click from the user 
            this.classList.toggle('flip');   // flipping the clicked card (toggle) == to add class named flip in css file
            userPathesArr.push(path);    // adding the path in the Arr for campare the index from the user [0] and [1]
            wrongFlipArr.push(this);  // in case the compare return false then we have the wrongFlipsArr to reset the flips automatcly
            isNewLevel();  // The compare function
        }
    }

    function end() {   // the reset functuon if the user  get tow wrong cards 
        userPathesArr = [];  // we reset the array to compare the new index the user chose 
        flipOut(500);    // flip back the wrong cards 
    }

    function isNewLevel (){   // The comparing function 
            if (userPathesArr.length == 2) {  // we see the length of the last to know if the user had chose 2 cards 
                if (userPathesArr[0] === userPathesArr[1]) {  // if the tow cards have the same id path == the same card we continue the game  
                    return newLevel();  // reset the lest for new click input from the user
                    }
                return end(); // reset function
            }
    } 

    function newLevel () {  
        userPathesArr = []; // reset the Arr for new click input from the user
        wrongFlipArr = []; // reset the Wrong Arr of inputs 
        win ();
    }

    function win () {   // the win event function
        const allCardsFlipped = Array.from(cards).every(card => card.classList.contains('flip')); //check if all cards flipped
        
        if (allCardsFlipped) {   
                const h1Element = document.createElement('h1'); // creating new element for the user to know that he wins  
                startButtonText.insertAdjacentElement('afterend', h1Element); //location of the element
                h1Element.textContent = 'You Win';     
                h1Element.style.display = 'flex';   
                h1Element.style.justifyContent = 'end';
                h1Element.style.alignItems = 'center';
                h1Element.style.width = '18rem';
        }
    }

    function flipOut (time){  // the flip function 

        setTimeout(() => {  // time delay function
            wrongFlipArr.forEach(card => card.classList.remove('flip'));  //flipping back the wrong Arr 
            wrongFlipArr = []; //reset after flipping
        },time);
    }

    start(); // start function 
}

















































