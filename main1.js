// let section1 =document.getElementById("first");
// let btn =document.getElementById("btn");

// let anim1 = document.getElementsByClassName("box-3");

//let memory = document.getElementsByClassName('memory');

function removeItem(){
    let memory1 = document.getElementById("date");
    memory1.remove();
}
// function display1(){
//     //section1.remove();
//     console.log("clicked");
// }
// function removeFirstPage(){
//     section1.remove();
    
//     //mainRun();
// }
function playSong(){
    var sound1 = new Audio();
    sound1.src =  "./sounds/birthdaysong.mp3";
    sound1.volume = 0.1;
    sound1.play();
}
function clap(){
    var sound1 = new Audio();
    sound1.src =  "./sounds/ClapOne.mp3";
    sound1.volume = 0.1;
    sound1.play();
}

function mainRun(){ 
    
    setTimeout(playSong,20);
    setTimeout(removeItem,17000);
    setTimeout(clap,40000);
    
    //Cheer
   // setTimeout(cheer,0);
    //Balloons
    //setTimeout(balloons,5);
    //Cake
    //setTimeout(cake,5000);
    
    //Candies
    /*setTimeout(candiDrops,6000);//1
    setTimeout(candiDrops,6600);//2
    setTimeout(candiDrops,6700);//3
    setTimeout(candiDrops,6800);//4
    setTimeout(candiDrops,8000);//5
    setTimeout(candiDrops,8500);//6
    setTimeout(candiDrops,9000);//7
    setTimeout(candiDrops,9100);//8
    setTimeout(candiDrops,9500);//9
    setTimeout(candiDrops,10000);//10
    setTimeout(candiDrops,10500);//11
    setTimeout(candiDrops,11000);//12
    setTimeout(candiDrops,12000);//13
    setTimeout(candiDrops,13000);//14*/

    //Candles
    /*setTimeout(candles,13200);
    setTimeout(candles,14000);
    setTimeout(candles,15000);*/
   
    //Flames
   /*setTimeout(flames,16000);
    setTimeout(flames,16500);
    setTimeout(flames,17000);*/

    //Stars
    /*setTimeout(stars,18500);
    setTimeout(stars,19000);
    setTimeout(stars,19500);
    setTimeout(stars,21000);
    setTimeout(stars,18000);*/

    //Gift
    //setTimeout(gifts,18800);

    //BirthdayHat
    //setTimeout(birthdayHat,20000);

    //Wish
    //setTimeout(wish,21000);
    //playSong
}
/*function cheer(){
    var sound1 = new Audio();
    sound1.src =  "./sounds/Clap2.wav";
    sound1.volume = 0.09;
    sound1.play();
}
function balloons(){
    var sound1 = new Audio();
    sound1.src =  "./sounds/balloon.wav";
    sound1.volume = 0.09;
    sound1.play();
}


function cake(){
    var sound1 = new Audio();
    sound1.src =  "./sounds/appier.wav";
    sound1.volume = 0.09;
    sound1.play();
}
function candiDrops(){
    var sound1 = new Audio();
    sound1.src =  "./sounds/candiDrops.wav";
    sound1.volume = 0.09;
    sound1.play();
}
function flames(){
    var sound1 = new Audio();
    sound1.src =  "./sounds/flames.wav";
    sound1.volume = 0.09;
    sound1.play();
}
function candles(){
    var sound1 = new Audio();
    sound1.src =  "./sounds/candles.wav";
    sound1.volume = 0.09;
    sound1.play();
}
function stars(){
    var sound1 = new Audio();
    sound1.src =  "./sounds/stars.wav";
    sound1.volume = 0.09;
    sound1.play();
}
function gifts(){
    var sound1 = new Audio();
    sound1.src =  "./sounds/gift2.wav";
    sound1.volume = 0.1;
    sound1.play();
}
function birthdayHat(){
    var sound1 = new Audio();
    sound1.src =  "./sounds/birthdayHat.wav";
    sound1.volume = 0.09;
    sound1.play();
}
function wish(){
    var sound1 = new Audio();
    sound1.src =  "./sounds/wish.wav";
    sound1.volume = 0.09;
    sound1.play();
}*/

