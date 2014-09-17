$(document).ready(function(){
   //initialize count and number of questions
    var count = 0;
    var numQuestions = 5;
    var correctCount = 0;
    
    //hide extra info and contune button
    $(".hiddenInfo").hide();
    $(".continue").hide();
    
    //increment count when continue button pressed
    $(".continue").on("click", function(){
        hidePrevQuestion();
        count +=1;
        if (count < numQuestions) {
            displayNextQuestion();
            $(".continue").toggle();
        }else{
            displayNextQuestion();
            displayResult();
        }
        
    });
    
    //hides previous question after answered 
     var hidePrevQuestion = function(){
        var classToHide = "q" + count;
        $('.' + classToHide).css("display", "none");
    }
    
    //display appropriate question based on count
    var displayNextQuestion = function(){
        var classToDisplay = "q" + count;
        $('.' + classToDisplay).css("display", "block");
    }
    
    //determine if answer is correct and display result when next is clicked
    $(".answer").on("click", function(){
        $(this).next().slideDown();
        $(".continue").toggle();
        if ($(this).hasClass("yep")) {
            $(this).addClass("correct");
            correctCount++;
        }else{
            $(this).addClass("incorrect");
        }
    });
    
    //display results after last page of quiz
    var displayResult = function(){
        $( ".q5 p:first" ).append( correctCount + " out of 5 questions correctly.");
         $(".continue").on("click", function(){
            window.location = ("index.html");
         });
    }
    
});