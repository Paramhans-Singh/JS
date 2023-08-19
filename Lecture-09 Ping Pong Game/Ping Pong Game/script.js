// "use strict";
// var first_rod = document.getElementById("rod-one");
// var second_rod = document.getElementById("rod-two");
// var ball = document.getElementById("ball");
// var current_timeout_is_running = false;
// var current_score =
// {
//     first: 0,
//     second: 0,
// }
// var action =
// {
//     loosing_side: "",
//     lost: false
// }
// function centeralise_element(element)
// {
//     element.style.left = ((document.documentElement.clientWidth / 2) - (element.offsetWidth / 2)).toString() + "px";
//     element.style.left = ((document.documentElement.clientWidth / 2) - (element.offsetWidth / 2)).toString() + "px";
//     if (element == ball)
//     {
//         if (action.lost)
//         {
//             if (action.loosing_side == "first")
//             {
//                 ball.style.top = (first_rod.clientHeight+5).toString() + "px";
//             }
//             else
//             {
//                 ball.style.top = (document.documentElement.clientHeight - second_rod.clientHeight - ball.clientHeight-5).toString() + "px";
//             }
//         }
//         else
//             element.style.top = (document.documentElement.clientHeight / 2).toString() + "px";
//     }
// }

// function add_event_listener_to_rods()
// {
//     window.addEventListener("keydown", function (event)
//     {
//         let code = event.keyCode;
//         if (code == 39)
//         {

//             let left_numeric = parseInt(
//                 first_rod.style.left.substring(0, first_rod.style.left.length - 2)
//             );
//             left_numeric += 20;
//             if (left_numeric + first_rod.offsetWidth > document.documentElement.clientWidth)
//             {
//                 left_numeric = document.documentElement.clientWidth - first_rod.offsetWidth;
//             }
//             first_rod.style.left = left_numeric.toString() + "px";
//             second_rod.style.left = left_numeric.toString() + "px";
//         } else if (code == 37)
//         {
//             let left_numeric = parseInt(
//                 first_rod.style.left.substring(0, first_rod.style.left.length - 2)
//             );
//             left_numeric -= 20;
//             if (left_numeric < 0)
//             {
//                 left_numeric = 0;
//             }
//             first_rod.style.left = left_numeric.toString() + "px";
//             second_rod.style.left = left_numeric.toString() + "px";
//         }
//     });
// }
// function touched_upper_bar()
// {
//     let ball_top_numerical = ball.getBoundingClientRect().top;
//     let ball_left_numerical = ball.getBoundingClientRect().left;
//     let bar_left_numerical = parseInt(first_rod.style.left.substring(0, first_rod.style.left.length - 2));
//     if ((ball_top_numerical <= first_rod.clientHeight) && (ball_left_numerical + (ball.clientWidth / 2) > bar_left_numerical) && (ball_left_numerical + (ball.clientWidth / 2) < bar_left_numerical + first_rod.clientWidth))
//     {
//         if (!current_timeout_is_running)
//         {
//             current_timeout_is_running = true;
//             setTimeout(function ()
//             {
//                 current_score.first++;
//                 current_timeout_is_running = false;
//                 console.log("first", current_score.first);
//             }, 200);
//         }
//         return true;
//     }
//     return false;
// }
// function touched_lower_bar()
// {
//     let ball_top_numerical = ball.getBoundingClientRect().top;
//     let ball_left_numerical = ball.getBoundingClientRect().left;
//     let bar_left_numerical = parseInt(second_rod.style.left.substring(0, second_rod.style.left.length - 2));
//     if ((ball_top_numerical + ball.clientHeight + second_rod.clientHeight >= document.documentElement.clientHeight) && (ball_left_numerical + (ball.clientWidth / 2) > bar_left_numerical) && (ball_left_numerical + (ball.clientWidth / 2) < bar_left_numerical + second_rod.clientWidth))
//     {
//         if (!current_timeout_is_running)
//         {
//             current_timeout_is_running = true;
//             setTimeout(function ()
//             {
//                 current_score.second++;
//                 current_timeout_is_running = false;
//                 console.log("second", current_score.second);
//             }, 200);
//         }
//         return true;
//     }
//     return false;
// }
// function set_interval_for_ball()
// {

//     let interval_id = setInterval(function ()
//     {
//         let numeric_left = ball.getBoundingClientRect().left;
//         let numeric_top = ball.getBoundingClientRect().top;
//         if (numeric_left <= 0)//hit left
//         {
//             let class_present = ball.classList[0];
//             if (class_present == "animate-top-left")
//             {
//                 ball.classList.remove(class_present);
//                 ball.classList.add("animate-top-right");
//             }
//             else if (class_present == "animate-bottom-left")
//             {
//                 ball.classList.remove(class_present);
//                 ball.classList.add("animate-bottom-right");
//             }
//         }
//         else if (numeric_left + ball.offsetWidth >= document.documentElement.clientWidth)//hit right
//         {
//             let class_present = ball.classList[0];
//             if (class_present == "animate-top-right")
//             {
//                 ball.classList.remove(class_present);
//                 ball.classList.add("animate-top-left");
//             }
//             else if (class_present == "animate-bottom-right")
//             {
//                 ball.classList.remove(class_present);
//                 ball.classList.add("animate-bottom-left");
//             }
//         }
//         else if (numeric_top <= 0 || numeric_top + ball.offsetHeight >= document.documentElement.clientHeight)//game over
//         {
//             ball.classList.remove(ball.classList[0])
//             if (numeric_top <= 0)
//             {
//                 action.loosing_side = "first";
//                 action.lost = true;
//             }
//             else if (numeric_top + ball.offsetHeight >= document.documentElement.clientHeight)
//             {
//                 action.loosing_side = "second";
//                 action.lost = true;
//             }
//             centeralise_element(ball);
//             centeralise_element(first_rod);
//             centeralise_element(second_rod);

//             alert('Game Over');
//             clearInterval(interval_id);
//             if (current_score.first > localStorage.getItem('first'))
//             {
//                 localStorage.setItem('first', current_score.first);
//             }
//             if (current_score.second > localStorage.getItem('second'))
//             {
//                 localStorage.setItem('second', current_score.second);
//             }
//             current_score.first=0;
//             current_score.second=0;
//             show_score();
//         }
//         else if (touched_lower_bar())//touched lower bar
//         {
//             let class_present = ball.classList[0];
//             if (class_present == "animate-bottom-right")
//             {
//                 ball.classList.remove(class_present);
//                 ball.classList.add("animate-top-right");
//             }
//             else if (class_present == "animate-bottom-left")
//             {
//                 ball.classList.remove(class_present);
//                 ball.classList.add("animate-top-left");
//             }
//         }
//         else if (touched_upper_bar())//touched upper bar
//         {
//             let class_present = ball.classList[0];
//             if (class_present == "animate-top-right")
//             {
//                 ball.classList.remove(class_present);
//                 ball.classList.add("animate-bottom-right");
//             }
//             else if (class_present == "animate-top-left")
//             {
//                 ball.classList.remove(class_present);
//                 ball.classList.add("animate-bottom-left");
//             }
//         }
//     }, 1)
// }
// function show_score()
// {
//     if (localStorage.getItem('first') == null)
//     {
//         localStorage.setItem('first', 0);
//         localStorage.setItem('second', 0);
//         window.alert("This is your first time");
//     }
//     else
//     {
//         window.alert("Rod 1 has a maximum score of " + localStorage.getItem('first').toString() + "\n" + "Rod 2 has a maximum score of " + localStorage.getItem('second'));
//     }
// }

// centeralise_element(first_rod);
// centeralise_element(second_rod);
// centeralise_element(ball);
// show_score();
// add_event_listener_to_rods();
// set_interval_for_ball();

// document.addEventListener('keydown', function (event)
// {
//     if (event.keyCode == 13)
//     {
//         if (action.lost)
//         {
//             if (action.loosing_side == "first")
//             {
//                 ball.classList.add('animate-bottom-right');
//             }
//             else
//             {
//                 ball.classList.add('animate-top-right');
//             }
//         }
//         else
//             ball.classList.add('animate-bottom-right');
//         set_interval_for_ball()
//     }
// })

var ball = document.getElementById('ball');
var rod1 = document.getElementById('rod1');
var rod2 = document.getElementById('rod2');


const storeName = "PPName";
const storeScore = "PPMaxScore";
const rod1Name = "Rod 1";
const rod2Name = "Rod 2";


let score,
    maxScore,
    movement,
    rod,
    ballSpeedX = 2,
    ballSpeedY = 2;

let gameOn = false;

let windowWidth = window.innerWidth,
    windowHeight = window.innerHeight;



(function () {
    rod = localStorage.getItem(storeName);
    maxScore = localStorage.getItem(storeScore);

    if (rod === "null" || maxScore === "null") {
        alert("This is the first time you are playing this game. LET'S START");
        maxScore = 0;
        rod = "Rod1"
    } else {
        alert(rod + " has maximum score of " + maxScore * 100);
    }

    resetBoard(rod);
})();



function resetBoard(rodName) {

    rod1.style.left = (window.innerWidth - rod1.offsetWidth) / 2 + 'px';
    rod2.style.left = (window.innerWidth - rod2.offsetWidth) / 2 + 'px';
    ball.style.left = (windowWidth - ball.offsetWidth) / 2 + 'px';


    // Lossing player gets the ball
    if (rodName === rod2Name) {
        ball.style.top = (rod1.offsetTop + rod1.offsetHeight) + 'px';
        ballSpeedY = 2;
    } else if (rodName === rod1Name) {
        ball.style.top = (rod2.offsetTop - rod2.offsetHeight) + 'px';
        ballSpeedY = -2;
    }

    score = 0;
    gameOn = false;

}



function storeWin(rod, score) {

    if (score > maxScore) {
        maxScore = score;
        localStorage.setItem(storeName, rod);
        localStorage.setItem(storeScore, maxScore);
    }

    clearInterval(movement);
    resetBoard(rod);

    alert(rod + " wins with a score of " + (score * 100) + ". Max score is: " + 
        (maxScore * 100));

}



window.addEventListener('keydown', function () {
    let rodSpeed = 20;

    let rodRect = rod1.getBoundingClientRect();
    let code = event.keyCode;


    if (code === 65 && ((rodRect.x + rodRect.width) < window.innerWidth)) {
        rod1.style.left = (rodRect.x) + rodSpeed + 'px';
        rod2.style.left = rod1.style.left;
    } else if (code === 68 && (rodRect.x > 0)) {
        rod1.style.left = (rodRect.x) - rodSpeed + 'px';
        rod2.style.left = rod1.style.left;
    }


    if (event.code === "Enter") {

        if (!gameOn) {
            gameOn = true;
            let ballRect = ball.getBoundingClientRect();
            let ballX = ballRect.x;
            let ballY = ballRect.y;
            let ballDia = ballRect.width;

            let rod1Height = rod1.offsetHeight;
            let rod2Height = rod2.offsetHeight;
            let rod1Width = rod1.offsetWidth;
            let rod2Width = rod2.offsetWidth;


            movement = setInterval(function () {
                // Move ball 
                ballX += ballSpeedX;
                ballY += ballSpeedY;

                let rod1X = rod1.getBoundingClientRect().x;
                let rod2X = rod2.getBoundingClientRect().x;

                ball.style.left = ballX + 'px';
                ball.style.top = ballY + 'px';


                if ((ballX + ballDia) > windowWidth || ballX < 0) {
                    ballSpeedX = -ballSpeedX; // Reverses the direction
                }

                // It specifies the center of the ball on the viewport
                let ballPos = ballX + ballDia / 2;

                // Check for Rod 1
                if (ballY <= rod1Height) {
                    ballSpeedY = -ballSpeedY; // Reverses the direction
                    score++;

                    // Check if the game ends
                    if ((ballPos < rod1X) || (ballPos > (rod1X + rod1Width))) {
                        storeWin(rod2Name, score);
                    }
                }

                // Check for Rod 2
                else if ((ballY + ballDia) >= (windowHeight - rod2Height)) {
                    ballSpeedY = -ballSpeedY; // Reverses the direction
                    score++;

                    // Check if the game ends
                    if ((ballPos < rod2X) || (ballPos > (rod2X + rod2Width))) {
                        storeWin(rod1Name, score);
                    }
                }

            }, 10);

        }
    }

});