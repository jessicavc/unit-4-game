// /* How it works:
//  - There will be four 'crystals' displayed as buttons on the page
//  - user will be shown a random number at the start of the game
//  - when user clicks on a 'crystal', it was add a specific amount of points to the user's total score
//  - game will hide the crystal value until clicked on
//  - when clicked on user's score counter updates accordingly
//  - user wins if total matches random number
//  - user loses if their total goes above random number
//  - game restarts after each win/loss
//  - when the game begins again, the user should see a new random number and all the 'crystals' will have 4 new hidden values and user score counter will reset to 0
//  - win counter
//  - loss counter */

//global variables
function getRandomCrystal() {
   return Math.floor(Math.random() + (12 - 1) + 1);
}

function getRandomNumBox() {
    return Math.floor(Math.random() * (120 - 19) + 19);
}


//counters

var wins = 0;
var losses = 0;
var totalScore = 0;

//functions

function reset() {
    totalScore = 0;

    //saves to score on click
    //added .off() to prevent last score from carrying over to next round
    $('.box').off().on('click', function(){});

    $('.leaderBoard').html(leaderBoard);
    start();
}

function start() {
    var crystal1 = getRandomCrystal();
    var crystal2 = getRandomCrystal();
    var crystal3 = getRandomCrystal();
    var crystal4 = getRandomCrystal();

    var randomNumBox = getRandomNumBox();

    $('.randomNumBox').html(randomNumBox);
    $('#leaderBoard').html(leaderBoard);


    //assign random value to crystals

    $('.crystal1').attr("value", crystal1);
    var test = $('.crystal1').attr("value");
    console.log('crystal1 ' + test);

    $('.crystal2').attr("value", crystal2);
    var test = $('.crystal2').attr("value");
    console.log('crystal2 ' + test);

    $('.crystal3').attr("value", crystal3);
    var test = $('.crystal3').attr("value");
    console.log('crystal3 ' + test);

    $('.crystal4').attr("value", crystal4);
    var test = $('.crystal4').attr("value");
    console.log('crystal4' + test);

    

        var test1 = $(this).attr("value");
        totalScore = parseInt(totalScore) + parseInt(test1);
        console.log("Crystal* " + test1);
        console.log("score*** " + totalScore);
        $('leaderBoard').html(totalScore);

        if (randonNumBox === finalScore) {
            alert("WINNER!");
            wins++;
            $('.wins').html(wins)
            $('.scoreBoard').html(0);
            reset();
        }
        else if (totalScore > randomNumBox) {
            alert('LOSER!');
            losses++;
            $('.losses').html(losses);
            $('scoreBoard').html(0)
            reset();
        }
    }

start();
