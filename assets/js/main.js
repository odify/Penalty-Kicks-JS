//HAVE FUN WITH PENALTY KICKS IN JAVASCRIPT

var ball = Get('#ball');
var keeper = Get('#keeper');
var kick = Get('#kick');
var info = Get('#info');
var info_text = Get('#info_text');
var start_btn = Get('#start_btn');

var que = false;
var us_score = 0;
var pcs_score = 0;
var count = 0;
var my_corner, my_level;
var selected = false;
var sudden_death = false;

var user_name = prompt('BECOME A REAL HERO AND WIN THE PENALTY KICKS\n ENTER YOUR NAME:\n') || 'YOU';
Get('#user').innerHTML = user_name + '<br /><br /><br />';

Get('#pc').innerHTML = 'ENEMY <br /><br /><br />';



Get('#user').innerHTML += `<span id="us" style="font-size:4em">${us_score}</span>`;


Get('#pc').innerHTML += `<span id="pcs" style="font-size:4em">${pcs_score}</span>`;


var us = Get('#us');
var pcs = Get('#pcs');

function Get (elem) {

    return document.querySelector(elem)

};



var Btns = document.querySelectorAll('button');

for (let i=0;i<Btns.length-1;i++) {

    Btns[i].disabled = true;
    Btns[i].addEventListener('click', function(){
    
    if (i == 0) {
        my_corner = 0;
        my_level = 1;
        selected = true;
    }
    if (i == 1) {
        my_corner = 0;
        my_level = 0;
        selected = true;
    }
    if (i == 2) {
        my_corner = 1;
        my_level = 3;
        selected = true;
        
    }
    if (i == 3) {
        my_corner = 2;
        my_level = 1;
        selected = true;
    }
    if (i == 4) {
        my_corner = 2;
        my_level = 0;
        selected = true;
    }
    
    for (let j=0;j<Btns.length-1;j++) {
        Btns[j].style.background = '#191919';
        Btns[i].style.color = '#FFF';
    }
    
    Btns[i].style.background = '#FFF';
    Btns[i].style.color = '#000';
})
}

Btns[Btns.length-1].disabled = true;


// INFOS

function ShowInfo() {

    info_text.innerHTML = '<center><span style="color:#FFFFFF">WELCOME TO MY FINAL RESULT OF PENALTY-S-JS </span><br /> HAVE FUN AND GOOD LUCK </center>';
    info.style.animation = 'start 1.5s 0.4s ease forwards';

    setTimeout(function(){
        user.style.animation = 'appear 1s linear forwards';
        pc.style.animation = 'appear 1s linear forwards';
    },1992)

    setTimeout(function(){
        info.style.left = '5%';

    },1999)
}

setTimeout(ShowInfo, 200);





// MAIN FUNCTIONS



function Start() {

if (sudden_death) {

    info.style.animation = 'continue .5s 0.4s ease forwards';
    setTimeout(function(){
        info.style.left = '100%';
        start_btn.style.display = 'none';
    },1007)
}


else {
    us_score = 0;
    pcs_score = 0;
    count = 0;
    Get('#us').innerHTML = us_score;
    Get('#pcs').innerHTML = pcs_score;
    info.style.animation = 'continue .5s 0.3s ease forwards';

    setTimeout(function(){
        info.style.left = '100%';
        start_btn.style.display = 'none';

    },1003)
    
    }
    
    for (let btn of Btns) {
        btn.disabled = false;
    }
}

start_btn.addEventListener('click', Start);


function Play () {


if (selected) {

    let pc_corner = RandomCorner();
    let pc_level = RandomLevel();
    count += 1;
    
    
    if (my_corner == 1) {
        my_level = pc_level;
    }
    

    for (let j=0;j<Btns.length-1;j++) {
        Btns[j].disabled = true;
    }


if (!que) {



    if (pc_corner==0 && pc_level==0) {
        keeper.style.animation = 'KBL 2.3s 0.28s ease-out';
    }
    else if (pc_corner==0 && pc_level==1) {
        keeper.style.animation = 'KTL 2.29s 0.29s ease-out';
    }
    else if (pc_corner==1) {
        keeper.style.animation = 'KC 2.3s 0.28s ease-out';
    }
    else if (pc_corner==2 && pc_level==0) {
        keeper.style.animation = 'KBR 2.27s 0.31s ease-out';
    }
    else if (pc_corner==2 && pc_level==1) {
        keeper.style.animation = 'KTR 2.32s 0.27s ease-out';
    }


    if (my_corner==0 && my_level==0) {
        ball.style.animation = 'BBL 2.28s 0.25s ease-out';
    }
    else if (my_corner==0 && my_level==1) {
        ball.style.animation = 'BTL 2.3s 0.26s ease-out';
    }
    else if (my_corner==1) {
        ball.style.animation = 'BC 2.25s 0.27s ease-out';
    }
    else if (my_corner==2 && my_level==0) {
        ball.style.animation = 'BBR 2.3s 0.29s ease-out';
    }
    else if (my_corner==2 && my_level==1) {
        ball.style.animation = 'BTR 2.21s 0.28s ease-out';
    }
    

    if (pc_corner!=my_corner || pc_level!=my_level) {

        us_score += 1;

        setTimeout(function(){
    
            info.style.fontSize = '3.84em';
            info.style.fontWeight = 'bold';
            info.style.display = 'flex';
            info.style.justifyContent = 'center';
            info.style.alignItems = 'center';
            info.innerHTML = 'GOAL !!!';
            info.style.animation = 'goal 1.2s ease-in';
    
        }, 991)
    }
    else {
        setTimeout(function(){
    
            info.style.fontSize = '3.98em';
            info.style.fontWeight = 'bold';
            info.style.display = 'flex';
            info.style.justifyContent = 'center';
            info.style.alignItems = 'center';
            info.innerHTML = 'FAIL !';
            info.style.animation = 'goal 1.2s ease-out';
    
        }, 992)
    }


    setTimeout(function(){
        
        us.innerHTML = us_score;
        kick.innerHTML = 'CATCH';
        if (count == 10 && !sudden_death) {
            if (us_score == pcs_score){
            
                SuddenDeath();
            }
            else {
                
                End();
            }
        }
        
        info.style.animation = 'none';

    }, 2500)
    
    if (sudden_death && count%2==0 && us_score != pcs_score) {

        setTimeout(End, 2640);
    }

}


if (que) {


    if (pc_corner==0 && pc_level==0) {
        ball.style.animation = 'BBL 2.27s 0.26s ease-out';
    }
    else if (pc_corner==0 && pc_level==1) {
        ball.style.animation = 'BTL 2.29s 0.28s ease-out';
    }
    else if (pc_corner==1) {
        ball.style.animation = 'BC 2.31s 0.27s ease-out';
    }
    else if (pc_corner==2 && pc_level==0) {
        ball.style.animation = 'BBR 2.26s 0.19s ease-out';
    }
    else if (pc_corner==2 && pc_level==1) {
        ball.style.animation = 'BTR 2.28s 0.24s ease-out';
    }
    

    
    if (my_corner==0 && my_level==0) {
        keeper.style.animation = 'KBL 2.77s 0.21s ease-out';
    }
    else if (my_corner==0 && my_level==1) {
        keeper.style.animation = 'KTL 2.28s 0.18s ease-out';
    }
    else if (my_corner==1) {
        keeper.style.animation = 'KC 2.38s 0.23s ease-out';
    }
    else if (my_corner==2 && my_level==0) {
        keeper.style.animation = 'KBR 2.34s 0.19s ease-out';
    }
    else if (my_corner==2 && my_level==1) {
        keeper.style.animation = 'KTR 2.29s 0.22s ease-out';
    }
    
    if ((my_corner==1 && pc_corner==1) || (my_level==pc_level && my_corner==pc_corner)){

        setTimeout(function(){
    
            info.style.fontSize = '4.07em';
            info.style.fontWeight = 'bold';
            info.style.display = 'flex';
            info.style.justifyContent = 'center';
            info.style.alignItems = 'center';
            info.innerHTML = 'PERFECT!<br />YOU ARE<br /> AWESOME!'
            info.style.animation = 'goal 1.6s linear';
        }, 1000)
    }
    else {
        pcs_score += 1;
        setTimeout(function(){
    
            info.style.fontSize = '3.89em';
            info.style.fontWeight = 'bold';
            info.style.display = 'flex';
            info.style.justifyContent = 'center';
            info.style.alignItems = 'center';
            info.innerHTML = 'OHH NOOOO<br />ZOOORG !!!';
            info.style.animation = 'goal 1.4s linear';
        }, 1000)
    }
    
        
setTimeout(function(){
    
    pcs.innerHTML = pcs_score;
    kick.innerHTML = 'KICK';
    if (count == 10 && !sudden_death) {
        if (us_score == pcs_score) {
        
            SuddenDeath();
        }
        else {
            
            End();
        }
    }

    info.style.animation = 'none';
    
}, 2500)



    if (sudden_death && count%2==0 && us_score != pcs_score) {


        setTimeout(End, 2500);
    }
    
}

selected = false;

setTimeout(function(){


    ball.style.animation = 'none';
    keeper.style.animation = 'none';


    for (let i=0;i<Btns.length-1;i++) {
        Btns[i].disabled = false;
        Btns[i].style.background = '#3DD7AC';
        Btns[i].style.color = '#FFF'
    }
    
}, 2450)

que=!que;
}
}

kick.addEventListener('click', Play);

//RANDOM FUNCTIONS

function RandomCorner() {

    return Math.floor(Math.random() * 3)
}

function RandomLevel() {

    return Math.floor(Math.random() * 2)
}


// FINAL ROUND (SUDDENDEATH)

function SuddenDeath() {

    for (let btn of Btns) {

        btn.disabled = true;
    }
    
    info.style.backgroundColor = '#191919';
    info.style.color = '#ffffff';
    info.style.display = 'block';
    info.style.left = '100%';
    info.style.fontSize = '1.21em';
    info.innerHTML = '<div id="info_text"></div><div id="start_btn">LETS GO</div>';
    info_text = Get('#info_text');
    info_text.style.overflowY = 'scroll';
    info_text.style.overflowX = 'hidden';
    start_btn = Get('#start_btn');
    start_btn.style.display = 'flex';
    start_btn.addEventListener('click', Start);

    sudden_death = true;
    
    info_text.innerHTML = '<center><span style="color:red;font-size:1.27em"> FINAL ROUND &#127937; &#127937; &#127937; </span><br /><br /><br />MAKE YOUR LAST TRY<br /><br />TAKE YOUR LAST CHANCE NOW<br /><br /><span style="color:red">&#128170;</span></center>'
    setTimeout(function(){
            info.style.animation = 'start 1.7s ease forwards';
        },300);
    setTimeout(function(){
        info.style.left = '5%';

    },2100)

}

// End

function End(){

    for (let btn of Btns) {
        btn.disabled = true;
    }

    sudden_death = false;
    info.style.backgroundColor = '#f25c27';
    info.style.color = '#fff';
    info.style.display = 'block';
    info.style.left = '100%';
    info.style.fontSize = '1.13em';
    info.innerHTML = '<div id="info_text"></div><div id="start_btn">START</div>';
    info_text = Get('#info_text');
    info_text.style.overflowY = 'scroll';
    info_text.style.overflowX = 'hidden';
    start_btn = Get('#start_btn');
    start_btn.style.display = 'flex';
    start_btn.addEventListener('click', Start);
    
    if (us_score > pcs_score) {

        info_text.innerHTML = `<center><span style="color:red">AWESOME !! &#127942; &#127942; &#127942; </span><br /><br />${user_name}<br /> IS THE CHAMPION &#128526;<br /><br /><span style="font-size:3.21em">${us_score} : ${pcs_score}</span><br /><br /><br />Try again..?</center>`;
        setTimeout(function(){

            info.style.animation = 'start 1.7s ease forwards';
        },300);
        setTimeout(function(){
            info.style.left = '5%';
        },2500)
    }
    
    if (us_score < pcs_score) {

        info_text.innerHTML = `<center><span style="color:red">LOOOSER &#128518 &#128078;</span><br /> <br /><span style="font-size:3.12em">${us_score} : ${pcs_score}</span><br /><br /><br />Try again...?</center>`;
        setTimeout(function(){
            info.style.animation = 'start 1.6s ease forwards';
        },200);
        setTimeout(function(){

            info.style.left = '5%';

        },1998)
    }
    
}