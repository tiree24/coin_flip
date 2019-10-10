const coin = {
    state: 0,
    flip: function () {
        // 1. Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
        if (Math.random() > 0.5) {
            this.state = 0
        } else {
            this.state = 1
        }
    },
    toString: function () {
        // 2. Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
        if (this.state === 0) {
            return "Heads"
        }
        else {
            return "Tails"
        }
    },
    toHTML: function () {
        const image = document.createElement('img');
        // 3. Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        if (this.state === 0) {
            image.src = "heads.jpg"
        } else {
            image.src = "tails.jpg"
        }




        return image;

    }
};

// coin.flip()
// console.log(coin.toString())
// document.body.appendChild(coin.toHTML())


function display20Flips() {
    const results = [];
    // 4. Use a loop to flip the coin 20 times, each time displaying the result 
    // of the flip as a string on the page.  After your loop completes, return an array with 
    // the result of each flip.
    for (let i = 0; i < 20; i++){
        coin.flip()
        document.write(coin.toString())
        results.push (coin.toString())
    }
    return results
    

}
display20Flips()

function display20Images() {
    const results = [];
    // 5. Use a loop to flip the coin 20 times, and display the results of each 
    // flip as an image on the page.  After your loop completes, return an array with result 
    // of each flip.
    for (let i = 0; i < 20; i++){
        coin.flip()
        document.body.appendChild(coin.toHTML())
        results.push (coin.toHTML())
    }
    return results
    
}
display20Images()


// let newDiv = document.createElement('div')
// newDiv.innerHTML = "Hello"

// let containerElement = document.querySelector('#container')
// containerElement.appendChild(newDiv)