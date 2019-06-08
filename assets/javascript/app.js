$(document).ready(function() {

    var q0 = {
        question: "During what event did Evan have his first black-out?",
        answerChoices: ["A. Meeting his father for the first time", "B. Drawing a picture in school", "C. Being abused by Kayleigh and Tommy's father", "D. Finding a knife in the kitchen"],
        answer: "B.",
    }
    var q1 = {
        question: "What is odd about the mailbox in which Lenny puts the blockbuster?",
        answerChoices: ["A. It has the wrong address on it", "B. It looks just like the house for which it holds the mail", "C. It is made out of an old bird-feeder", "D. It makes noise when it is opened"],
        answer: "B.",
    }
    var q2 = {
        question: "What does Tommy do to get himself thrown out of the theatre?",
        answerChoices: ["A. He beats up another patron", "B. He snuck into an R-rated movie", "C. He curses at Evan for kissing Kayleigh", "D. He wouldn't shut up during the movie"],
        answer: "A.",
    }
    var q3 = {
        question: "What is Evan's dog's name?",
        answerChoices: ["A. Jason", "B. Fido", "C. Crocket", "D. Tommy"],
        answer: "C.",
    }
    var q4 = {
        question: "Why does Evan want to go out and celebrate with Thumper?",
        answerChoices: ["A. It's Saturday. No more reasoning required", "B. He aced another mid-term", "C. He messed up another bell curve on an exam", "D. Seven years and no black-outs"],
        answer: "D.",
    }
    var timeLeft = 10; // # of seconds left
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

    var replaceOptions = "";

    function countdown() {
        if (timeLeft === 0) {
            clearInterval(intervalId);
            $(".timer").text("Time Remaining: " + timeLeft + " Seconds");
            $(".results").text("Times Up! The correct answer is: " + answers[questionNumber]);
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
        if (questionNumber < questions.length) {} else {

        }

    }


    function reset() {
        $(".restart").hide();
        losses = 0;
        $(".incorrect").text("");
        wins = 0;
        $(".correct").text("");
        timesUp = 0;
        $(".unanswered").text("");
        questionNumber = 0;
        game();
    }

    $(".restart").hide();

    $(".start").on("click", function() {

        $(this).hide();
        game();
    });

    $(".restart").on("click", function() {
        reset();
    });



});