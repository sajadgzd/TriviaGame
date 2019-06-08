$(document).ready(function() {

    var q0 = {
        question: "During what event did Evan have his first black-out?",
        answerChoices: ["A. Meeting his father for the first time", "B. Drawing a picture in school", "C. Being abused by Kayleigh and Tommy's father", "D. Finding a knife in the kitchen"],
        answer: "B. Drawing a picture in school",
    }
    var q1 = {
        question: "What is odd about the mailbox in which Lenny puts the blockbuster?",
        answerChoices: ["A. It has the wrong address on it", "B. It looks just like the house for which it holds the mail", "C. It is made out of an old bird-feeder", "D. It makes noise when it is opened"],
        answer: "B. It looks just like the house for which it holds the mail",
    }
    var q2 = {
        question: "What does Tommy do to get himself thrown out of the theatre?",
        answerChoices: ["A. He beats up another patron", "B. He snuck into an R-rated movie", "C. He curses at Evan for kissing Kayleigh", "D. He wouldn't shut up during the movie"],
        answer: "A. He beats up another patron",
    }
    var q3 = {
        question: "What is Evan's dog's name?",
        answerChoices: ["A. Jason", "B. Fido", "C. Crocket", "D. Tommy"],
        answer: "C. Crocket",
    }
    var q4 = {
        question: "Why does Evan want to go out and celebrate with Thumper?",
        answerChoices: ["A. It's Saturday. No more reasoning required", "B. He aced another mid-term", "C. He messed up another bell curve on an exam", "D. Seven years and no black-outs"],
        answer: "D. Seven years and no black-outs",
    }
    var timeLeft = 3; // # of seconds left
    var losses = 0; // # of wrong answers
    var wins = 0; // # of right answers
    var timesUp = 0; // the number of non-answered
    var questionNumber = 0; // the number of the question

    var questions = [q0.question, q1.question, q2.question, q3.question, q4.question];
    var answerOptions = [q0.answerChoices, q1.answerChoices, q2.answerChoices, q3.answerChoices, q4.answerChoices];
    var answers = [q0.answer, q1.answer, q2.answer, q3.answer, q4.answer]

    function winPage() {
        $(".gif-screen").html("<img src='https://media.giphy.com/media/6brH8dM3zeMyA/giphy.gif' class='winGif'>");
    }

    function losePage() {
        $(".gif-screen").html("<img src='https://media.giphy.com/media/26FeWWOMsz7cWeYcU/giphy.gif' class='loseGif'>");
    }

    function endPage() {
        $(".gif-screen").html("<img src='https://media.giphy.com/media/26AHC0kdj8IeLkmBy/giphy.gif' class='endGif'>");
    }

    var intervalId;

    function countdown() {
        if (timeLeft === 0) {
            clearInterval(intervalId);
            $(".buttons").remove();
            $(".timer").text("Time Remaining: " + timeLeft + " Seconds");
            $(".results").html("<h4> Times Up! The correct answer is: <br>  " + answers[questionNumber] + "</h4>");
            losePage();
            timesUp++;
            questionNumber++;
            setTimeout(game, 3000);
        } else {
            timeLeft--;
            $(".timer").text("Time Remaining: " + timeLeft + " Seconds");
        }
    }

    function game() {
        if (questionNumber < questions.length) {
            $(".gif-screen").empty();
            $(".results").empty();
            timeLeft = 10;
            intervalId = setInterval(countdown, 1000);
            $(".question").html("<h2>" + questions[questionNumber] + "</h2>");
            for (let i = 0; i < answerOptions[questionNumber].length; i++) {
                $(".question").append(`<button class='buttons button${[i]}' value='${answerOptions[questionNumber][i]}'> ${answerOptions[questionNumber][i]} </button>`);
            }

            $(".buttons").on("click", function() {
                console.log($(this).attr("value"));
                console.log(answers[questionNumber]);
                if ($(this).val() === answers[questionNumber]) {
                    clearInterval(intervalId);
                    $(".buttons").remove();
                    $(".results").html("<h4> That's Correct! The answer is: <br> " + answers[questionNumber] + "</h4>");
                    winPage();
                    wins++;
                    questionNumber++;
                    setTimeout(game, 3000);
                } else {
                    clearInterval(intervalId);
                    $(".buttons").remove();
                    $(".results").html(" <h4> Wrong! The correct answer is: <br>" + answers[questionNumber] + "</h4>");
                    losePage();
                    losses++;
                    questionNumber++;
                    setTimeout(game, 3000);
                }

            });


        } else {
            clearInterval(intervalId);
            $(".results").html("<h4> Game Over! Press Restart to Play Again! </h4>");
            endPage();
            $(".question").empty();
            $(".scoreboard").append("<p> Unanswered: " + timesUp + "</p>");
            $(".scoreboard").append("<p> Correct: " + wins + "</p>");
            $(".scoreboard").append("<p> Incorrect: " + losses + "</p>");

            $(".restart").show();
        }

    }


    function reset() {

        $(".restart").hide();
        $(".scoreboard").empty();
        losses = 0;
        wins = 0;
        timesUp = 0;
        questionNumber = 0;
        game();
    }

    $(".restart").hide();

    $(".start").on("click", function() {

        $(this).remove();
        game();
    });

    $(".restart").on("click", function() {
        reset();
    });

});