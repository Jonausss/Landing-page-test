function RollDice(diceNumber) 
{
    var diceImg = document.getElementById("d"+diceNumber+"Img");
    var diceText = document.getElementById("d"+diceNumber+"Text")

    diceImg.style.transform += "rotate(360deg)";

    var randomNumber = parseInt((Math.random()*diceNumber)+1);
    $(diceText).text(randomNumber);
}

var answerSelected = 0;
function OpenAnswer(answerId, answersNumber)
{
    var answerText = 
    ["Yes, RPG is played with friends, but don't worry! Our site provide you a service to meet another persons who are looking for play too.", 
    "A RPG's system is the rules to determinate the results of the actions of the characters.",
    "The classic is D&D, but in our forums you will find a lot of easy systems.",
    "No! Our contents are free to everyone, we earn money only with our products and adversiments.",]
    var answerId_ = document.getElementById("answer"+answerId);
    var answerButtonId = document.getElementById("questionButton"+answerId);
    
    if(answerSelected == answerId)
    {
        for (var i = 0; i <= answersNumber; i++)
        {
            i_ = i+1
            $(document.getElementById("answer"+i_)).text("");
            answerSelected = 0;

            answerButtonId.style.transform = "rotate(0deg)";
        }
    }
    else if (answerSelected != answerId)
    {
        for (var i = 0; i <= answersNumber; i++)
        {
            i_ = i+1
    
            if (answerId_ == document.getElementById("answer"+i_))
            {
                $(document.getElementById("answer"+i_)).text(answerText[i]);
                answerSelected = i_;

                answerButtonId.style.transform = "rotate(90deg)";
            }
            else
            {
                $(document.getElementById("answer"+i_)).text("");
                document.getElementById("questionButton"+i_).style.transform = "rotate(0deg)";
            }
        }
    }

    console.log("OpenAnswer(" + answerId + ", " + answersNumber + ") " + answerId_ + " " + answerSelected);
}