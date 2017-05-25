(function(){

    window.onload = function() {

        // bonus - play a sound when the shoot button is pushed and a goal is scored
        var audio = new Audio('applause6.mp3');

        // prettify the page
        document.body.style.backgroundColor = "pink";
        document.body.style.fontsize = "large";

        document.getElementById("reset").style.fontSize = "x-large";
        document.getElementById("num-resets").style.fontSize = "large";

        document.getElementById("teamone-shoot").style.fontSize = "x-large";
        document.getElementById("teamone-numshots").style.fontSize = "large";
        document.getElementById("teamone-numhits").style.fontSize = "large";
        document.querySelector(".left").style.padding = "25px";
        document.querySelector(".left").style.border = "thin solid black";

        document.getElementById("teamtwo-numshots").style.fontSize = "large";
        document.getElementById("teamtwo-numhits").style.fontSize = "large";
        document.getElementById("teamtwo-shoot").style.fontSize = "x-large";
        document.querySelector(".right").style.padding = "25px";
        document.querySelector(".right").style.border = "thin solid black";

        // shots have a random chance of succeeding or failing
        // number of shots taken should increase every click on the "SHOOT" button
        // number of hits obviously only increases when the shot is successful
        // Clicking the "RESET" button resets all the shot and score counters AND adds 1 to the number of resets

        // reset: num_resets, reset_button, button event
        let num_resets = document.querySelector("#num-resets");
        let reset_button = document.querySelector("#reset");

        // team 1: one_shots, one_goals, one_button event click
        let one_shots = document.querySelector("#teamone-numshots");
        let one_goals = document.querySelector("#teamone-numhits");
        let one_button = document.querySelector("#teamone-shoot");

        // team 2: two_shots, two_goals, two_button event click
        let two_shots = document.querySelector("#teamtwo-numshots");
        let two_goals = document.querySelector("#teamtwo-numhits");
        let two_button = document.querySelector("#teamtwo-shoot");


        reset_button.addEventListener("click", function(evt) {
            num_resets.innerHTML = parseInt(num_resets.innerHTML) + 1;
            one_shots.innerHTML = 0;
            one_goals.innerHTML = 0;
            two_shots.innerHTML = 0;
            two_goals.innerHTML = 0;
        })

        one_button.addEventListener("click", function(evt) {
            one_shots.innerHTML = parseInt(one_shots.innerHTML) + 1;
            let randomBool = Math.random() >= 0.5;
            if (randomBool == 1) {
                one_goals.innerHTML = parseInt(one_goals.innerHTML) + 1;
                audio.play();
            }
            console.log("team one: " + randomBool);
        })

        two_button.addEventListener("click", function(evt) {
            two_shots.innerHTML = parseInt(two_shots.innerHTML) + 1;
            let randomBool = Math.random() >= 0.5;
            if (randomBool == 1) {
                two_goals.innerHTML = parseInt(two_goals.innerHTML) + 1;
                audio.play();
            }
            console.log("team two " + randomBool);
        })


    }
})()
