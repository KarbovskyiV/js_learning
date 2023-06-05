// write function congratsIfMoreThan100(), that accept array of followers and display on page
// using alert() function congrats, if you have more than 100 followers

function congratsIfMoreThan100(followers) {
    if (followers.length > 100) {
        alert('Congrats!');
    }
}

// write function, that accept array of number and brings each of them to the square

function toSquare(num) {
    for (let numElement of num) {
        numElement *= numElement;
        console.log(numElement);
    }
}

toSquare([2, 4, 5, 6, 7, 8]);
